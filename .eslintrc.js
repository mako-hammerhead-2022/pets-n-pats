module.exports = {
  extends: ['eda/react'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['**/node_modules/**', '**/dist/**'],
  settings: {
    'import/resolver': {
      node: {
        ...require.resolve('eslint-plugin-import/resolvers/node'),
        paths: {
          '@': ['./client'],
          '~': ['.'],
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
      },
    },
  },
}
