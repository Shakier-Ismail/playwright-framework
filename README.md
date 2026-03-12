# Playwright BDD Automation Framework

This project is a **Playwright + Cucumber (BDD) automation framework written in TypeScript**.

It supports:

- Playwright browser automation
- Cucumber BDD feature files
- TypeScript test implementation
- HTML test reporting
- GitHub Actions CI pipeline
- Secure environment variables using GitHub Secrets

---

# Tech Stack

- Node.js
- Playwright
- Cucumber
- TypeScript
- GitHub Actions
- multiple-cucumber-html-reporter

---

# Project Structure

```
playwright-bdd
│
├── features
│   └── login.feature
│
├── steps
│   └── login.steps.ts
│
├── hooks
│   └── hooks.ts
│
├── pages
│   └── LoginPage.ts
│
├── test-results
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── cucumber.js
├── generate-report.js
├── package.json
├── tsconfig.json
└── README.md
```

---

# Prerequisites

Before running the framework you must install:

## Node.js

Download and install Node.js:

https://nodejs.org/

Recommended version:

```
Node 18+
```

Verify installation:

```
node -v
npm -v
```

---

## Git

Download and install Git:

https://git-scm.com/downloads

Verify installation:

```
git --version
```

---

# Setup Project

Clone the repository:

```
git clone https://github.com/<your-username>/<repo-name>.git
```

Navigate to the project folder:

```
cd playwright-bdd
```

Install project dependencies:

```
npm install
```

Install Playwright browsers:

```
npx playwright install
```

---

# Environment Variables

This project uses environment variables for login credentials.

Create a `.env` file in the root of the project:

```
BASE_URL=https://example.com
USERNAME=yourusername
PASSWORD=yourpassword
```

Tests read values using:

```
process.env.USERNAME
process.env.PASSWORD
```

---

# Running Tests

Run tests locally:

```
npm test
```

---

# Generate HTML Test Report

Run tests and generate the HTML report:

```
npm run test:report
```

Open the report in your browser:

```
test-results/report/index.html
```

The report shows:

- Features
- Scenarios
- Steps
- Execution time
- Pass / Fail status

---

# GitHub Actions CI

The project includes a GitHub Actions workflow that runs tests automatically when code is pushed.

Workflow file:

```
.github/workflows/playwright.yml
```

Pipeline steps:

1. Checkout repository
2. Install dependencies
3. Install Playwright browsers
4. Run tests
5. Generate HTML report
6. Upload report artifact

---

# Configure GitHub Secrets

To run tests in GitHub CI you must configure repository secrets.

Go to:

```
Repository → Settings → Secrets → Actions
```

Add the following secrets:

```
BASE_URL
USERNAME
PASSWORD
```

These values will be injected into the CI pipeline securely.

---

# Viewing Test Reports in GitHub

After the pipeline runs:

Go to:

```
GitHub → Actions → Workflow Run
```

Download artifact:

```
cucumber-html-report
```

Open:

```
index.html
```

This will display the full test execution report.

---

# Useful Commands

Install dependencies:

```
npm install
```

Run tests:

```
npm test
```

Generate HTML report:

```
npm run report
```

Run tests and generate report:

```
npm run test:report
```

---

# Recommended `.env.example`

Add this file to the repository so others know which variables are required:

```
BASE_URL=
USERNAME=
PASSWORD=
```

---

# Future Improvements

Possible enhancements:

- Playwright trace viewer integration
- Screenshot capture on test failure
- Parallel test execution
- Environment configuration support
- Docker test execution

---

# Author

Shakier Ismail
