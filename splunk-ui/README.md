# Splunk UI
Splunk UI is a library of components for building user interfaces.

## Getting Started - Installation

### Use Splunk's internal npm repository

1. Create an `.npmrc` file in the root of your project (if you don't already have one)
1. Add a registry entry:
    ```
    registry=https://repo.splunk.com/artifactory/api/npm/npm
    ```

### Intall Splunk UI and dependencies
1. Splunk UI has two peer dependencies, react and react-dom:
    ```
    npm install react react-dom
    ```
1. Install the main package:
    ```
    npm install splunk-ui
    ```

## View the Splunk UI Docs app
The docs are hosted publicly at http://go/splunk-ui-docs. (TODO: Host past versions of Splunk UI Docs publicly: [SUI-675](https://jira.splunk.com/browse/SUI-675))

They can also be installed locally. The Splunk UI documentation app is shipped as a separate package:
```
npm install --dev splunk-ui-docs
```

Deploy the docs app:
```
./node_modules/.bin/deploy-splunk-ui-docs
```

The docs will be available at http://localhost:8011

Caution: The version of the docs app must be the same as the version of splunk-ui that you are using. To install a specific version of the app, specify it in the install command:
```
npm install --dev splunk-ui-docs@version
```

## Using in Production
To use Splunk UI and React in production mode, set the environment variable `NODE_ENV` to `"production"`. This will remove developer warnings and guidance from the output code. If using webpack, see the [DefinePlugin](https://webpack.github.io/docs/list-of-plugins.html#defineplugin) for details on how to set this up.

## API Status Indicators
Throughout the documentation you will see "API Status" indicators. These will give you an idea of how well established a given API is and how likely or dramatically it will be changed in the future. There are five status levels:

* **Deprecated**: This API is known to be problematic, and changes are planned. Do not rely on it. Use of the feature may cause warnings. Backwards compatibility should not be expected.

* **Alpha**: This API is new and not well established. It may dramatically change in a future version or be removed altogether.

* **Beta**: This API has been used and is beginning to solidify. It may change in a future version, but is on track to stable status.

* **Stable**: This API has proven satisfactory and will not be broken unless there is a very strong reason to do so.

* **Locked**: Only fixes related to security, performance, or bug fixes will be considered for APIs that are locked.


## Working with components

### Children
Almost all components accept children of type node.
The children prop is only included in the documentation where there are additional constraints.

### Styling components
The User Experience and UI Framework teams expects all apps to conform to standard styles.
This library will be updated to reflect any updates to our visual design standards.
Components do not, and will not, support theming or other changes to their appearance.

Pass style to control layout, margins or positioning, such as:

    <Button label="Hello" style={{ flexBasis: '200px' }} />

Many components have an inline property to switch between
inline-block/inline-flex and block/flex.
Use this property instead of passing a style prop.

    <Button inline={false} />

Passing className as a prop is only supported in Utility Components where documented. In other
components, doing so will add the className, but this is reserved for internal usage within the
library. The specificity of selectors may change at anytime and may therefore break stylesheet
overrides.

### Fonts
Splunk UI does not include fonts. You must define and load them in a @font-face declaration.
When used on a page with Splunk Enterprise's global stylesheets "Roboto" will be applied to the
Components. The default font, "Splunk Platform Sans" is not currently defined, but could be aliased
to a new font in the future.

Splunk Enterprise fonts:

    Sans (Default): "Splunk Platform Sans", "Roboto", "Helvetica Neue", Helvetica,
        Arial, sans-serif;
    Mono: "Splunk Platform Mono", 'Droid Sans Mono', 'Consolas', 'Monaco',
        'Courier New', Courier, monospace;
