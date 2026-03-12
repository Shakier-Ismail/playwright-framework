# Playwright BDD Automation Framework

This repository contains a **Playwright + Cucumber (BDD) test automation framework written in TypeScript**.

The framework supports:

- Playwright browser automation
- Cucumber BDD feature files
- TypeScript test implementation
- HTML test reporting
- GitHub Actions CI pipeline
- Secure environment variables using GitHub Secrets

Repository:  
https://github.com/Shakier-Ismail/playwright-framework

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
playwright-framework
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

## 1. Node.js

Download Node.js:

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

## 2. Git

Download Git:

https://git-scm.com/downloads

Verify:

```
git --version
```

---

# Setup the Project

Clone the repository:

```
git clone https://github.com/Shakier-Ismail/playwright-framework.git
```

Navigate to the project directory:

```
cd playwright-framework
```

Install dependencies:

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

The tests access credentials using:

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

The report includes:

- Features
- Scenarios
- Steps
- Pass / Fail results
- Execution time

---

# GitHub Actions CI

This project includes a **GitHub Actions pipeline** that automatically runs tests on every push.

Workflow location:

```
.github/workflows/playwright.yml
```

Pipeline process:

1. Checkout repository
2. Install dependencies
3. Install Playwright browsers
4. Run Cucumber tests
5. Generate HTML test report
6. Upload report as artifact

---

# Configure GitHub Secrets

To run tests in GitHub CI you must configure repository secrets.

Go to:

```
Repository → Settings → Secrets and Variables → Actions
```

Add the following secrets:

```
BASE_URL
USERNAME
PASSWORD
```

These are securely injected into the pipeline.

---

# Viewing Test Reports in GitHub

After a pipeline run:

Go to:

```
GitHub → Actions → Workflow Run
```

Scroll to **Artifacts** and download:

```
cucumber-html-report
```

Open:

```
index.html
```

to view the test report.

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

Run tests + generate report:

```
npm run test:report
```

---

# Recommended `.env.example`

Add this file to your repository so other users know which environment variables are required:

```
BASE_URL=
USERNAME=
PASSWORD=
```

---

# Future Improvements

Potential enhancements:

- Playwright trace viewer integration
- Screenshot capture on test failure
- Parallel test execution
- Multiple environment support
- Docker test execution

---

# Author

Shakier Ismail
