module.exports = {
  default: {
    require: [
      "hooks/**/*.ts",
      "steps/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      "html:test-results/report.html"
    ],
    paths: [
      "features/**/*.feature"
    ]
  }
};