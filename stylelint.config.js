module.exports = {
  extends: "@jgarber/stylelint-config",
  rules: {
    "function-no-unknown": [true, { ignoreFunctions: ["inline"] }],
  },
};
