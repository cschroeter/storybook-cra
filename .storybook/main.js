const path = require("path");

module.exports = {
  stories: ['../src/**/*.stories.(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-actions/register', '@storybook/addon-links/register'],
  presets: [   {
    name: '@storybook/preset-create-react-app',
    options: {
      tsDocgenLoaderOptions: {
        tsconfigPath: path.resolve(__dirname, '../tsconfig.json')
      }
    }
  }, '@storybook/addon-docs/preset'],
};
