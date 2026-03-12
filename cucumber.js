module.exports = {
  default: {
    require: [
      "hooks/**/*.ts",
      "steps/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "json:test-results/cucumber-report.json"
    ],
    formatOptions: {
      snippetInterface: "async-await"
    },
    paths: [
      "features/**/*.feature"
    ]
  }
};