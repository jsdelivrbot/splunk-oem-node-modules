define(function () {

    suite('Not a test file', function () {

        test('in root', function () {
            throw new Error('This file should not be loaded as a test file');
        });
    });
});