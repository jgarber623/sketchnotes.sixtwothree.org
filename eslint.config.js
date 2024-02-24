module.exports = (async () => {
  const { default: config } = await import("@jgarber/eslint-config");

  return [
    { ignores: ["site"] },
    ...config,
  ];
})();
