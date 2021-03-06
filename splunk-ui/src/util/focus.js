import keycode from 'keycode';
import { defer, filter, sortBy } from 'lodash';

/**
 * A helper method that will enforce circular tabbing inside the given container (i.e. tabbing from
 * the last element will wrap around to the first element and reverse tabbing from the first element
 * will wrap around to the last).
 *
 * Will only set focus on the next element if the event's target is inside the container, and if it
 * does, will prevent the default action of the event.
 *
 * @param $container (element) the container that should enforce the circular tabbing.
 * @param event (DOM event object) the keydown event that initiated the tabbing action.
 * @returns (element) the element that was focused, or null if no element was focused.
 */

const tabbableSelectors = `a[href], input:not([disabled]), select:not([disabled]),
     textarea:not([disabled]), button:not([disabled]), [tabindex], [contenteditable]`;

export function getSortedTabableElements(container) {
    const elems = container.querySelectorAll(tabbableSelectors);
    const tabbableElems = filter(elems, el => (el.tabIndex >= 0));
    return sortBy(tabbableElems, (el) => {
        if (el.tabIndex > 0) {
            return -1 / el.tabIndex;
        }
        return el.tabIndex;
    });
}

export function handleTab(container, event) {
    // Ensure this is a valid event
    if (keycode(event) !== 'tab' || event.metaKey || event.altKey || event.controlKey) {
        return null;
    }
    const tabbableElements = getSortedTabableElements(container);
    if (tabbableElements.length === 0) {
        // if the container is focused, don't allow the focus to leave.
        if (document.activeElement === container) {
            event.preventDefault();
            return container;
        }

        return null;
    }

    // Find the current index or set default.
    const currentElement = (event && event.target) || container.querySelector(':focus');
    let currentIndex = tabbableElements.indexOf(currentElement);
    if (currentIndex === -1) {
        currentIndex = event.shiftKey ? 0 : tabbableElements.length - 1;
    }

    // Shift the array instead of the current index.
    if (event.shiftKey) {
        tabbableElements.unshift(tabbableElements.pop()); // move last to first
    } else {
        tabbableElements.push(tabbableElements.shift()); // move first to last
    }

    // Focus
    event.preventDefault();
    tabbableElements[currentIndex].focus();
    return tabbableElements[currentIndex];
}

/**
 * A helper method that will focus on the first focusable element in a container.
 * If a contained element already has focus, focus will not shift.
 *
 * @param container (element) the container that should take focus.
 * @param defaultElement ('container' or 'first') defaults to 'first'.
 * @returns (element) the element that was focused, or null if no element was focused.
 */

export function takeFocus(container, defaultElement = 'first') {
    const currentElement = container.querySelector(':focus');
    if (currentElement) {
        return currentElement;
    }
    if (defaultElement === 'first') {
        const targetEl = getSortedTabableElements(container)[0];
        if (targetEl) {
            defer(() => targetEl.focus());
            return targetEl;
        }
    }
    if (container.hasAttribute('tabIndex')) {
        defer(() => container.focus());
        return container;
    }
    return null;
}
