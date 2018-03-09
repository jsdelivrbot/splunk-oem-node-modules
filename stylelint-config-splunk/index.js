module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
        indentation: 4,
        'property-no-unknown': [true, {
            ignoreProperties: [
                'composes',
            ],
        }],
    },
};
