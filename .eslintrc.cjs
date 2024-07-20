module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react", "import", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts", ".svg"],
      },
    },
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-uses-react": "off", // Эти правила не нужны с React 17+
    "react/react-in-jsx-scope": "off", // Эти правила не нужны с React 17+
    "import/no-unresolved": "error", // Ошибка при неверных импортах
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Предупреждение при неиспользуемых переменных, игнорировать переменные с _
    "@typescript-eslint/explicit-module-boundary-types": "off", // Отключить требование явного указания типов для границ модулей
  },
};
