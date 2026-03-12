module.exports = {
  default: {
    require: [
      "hooks/**/*.ts",
      "steps/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      "summary"
    ],
    paths: [
      "features/**/*.feature"
    ]
  }
};