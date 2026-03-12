module.exports = {
  default: {
    require: [
      "hooks/**/*.ts",
      "steps/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      "summary",
      "json:test-results/cucumber-report.json"
    ],
    paths: [
      "features/**/*.feature"
    ]
  }
};