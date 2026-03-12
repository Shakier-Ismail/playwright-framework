module.exports = {
  default: {
    require: [
      "hooks/**/*.ts",
      "steps/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "pretty"
    ],
    paths: [
      "features/**/*.feature"
    ]
  }
};