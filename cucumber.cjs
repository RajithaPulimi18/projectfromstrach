
module.exports = {
    default: {
        paths: [
            'features/**/*.feature'
        ],

        require: [
            'hooks/**/*.ts',
            'features/step-definitions/**/*.ts'
        ],

        format: ['progress'],

        publishQuiet: true
    }
};

//code is working when the configuration is working with the `.cjs` extension. 
// I changed the export syntax from `export default` to `module.exports`, and now Cucumber is loading the configuration successfully.