module.exports = {
  jsLoaderPlugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@fixtures": "./src/__fixtures__",
          "@domain": "./src/domain",
          "@helpers": "./src/helpers",
          "@store": "./src/store",
          "@ui": "./src/ui",
          "@lib": "./src/lib"
        }
      }
    ]
  ]
};
