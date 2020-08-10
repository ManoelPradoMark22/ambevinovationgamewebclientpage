module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
    "import/prefer-default-export": "off",
    "operator-linebreak": "off",
    "object-curly-newline": "off",
    "comma-dangle": "off",
    "no-param-reassign": "off",
    "max-len": "off",
    "no-unused-expressions": "off",
    "implicit-arrow-linebreak": "off",
  },
};
