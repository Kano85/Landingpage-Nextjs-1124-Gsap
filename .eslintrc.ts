module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json', // Needed for certain rules that require type information
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Uses rules from @typescript-eslint/eslint-plugin
    'plugin:react/recommended', // Uses react-specific linting rules
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended', // Accessibility linting rules
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@next/next/recommended', // Next.js specific rules
    'prettier', // Integrate with Prettier
  ],
  settings: {
    react: {
      version: 'detect',
    },
    next: {
      rootDir: 'src',
    },
  },
  rules: {
    // Place to specify custom ESLint rules
    // e.g., "@typescript-eslint/explicit-function-return-type": "off",
  },
};
