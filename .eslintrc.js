module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "vue/no-mutating-props": "off",
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off",
    "vue/require-prop-types": "off",
    "vue/component-definition-name-casing": ["error", "kebab-case"],
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "vue/no-potential-component-option-typo": ["error"],
    "vue/padding-line-between-blocks": ["error", "always"],
    "vue/valid-next-tick": ["error"],
    "vue/no-duplicate-attr-inheritance": ["error"],
    "vue/no-deprecated-slot-attribute": ["error"],
    "vue/no-deprecated-slot-scope-attribute": ["error"],
    "vue/no-deprecated-filter": ["error"],
    "vue/require-explicit-emits": ["error"],
    "vue/first-attribute-linebreak": ["error"],
    "vue/no-reserved-props": ["error"],
  },
};  
