# Playwright + Cucumber (Gherkin) BDD scaffold

Quick start

1. Copy `.env.example` to `.env` and set `BASE_URL`, `USERNAME` and `PASSWORD`.
2. Install dependencies:

```bash
npm install
```

3. Run the BDD tests:

```bash
npm test
```

4. To run with Playwright headed mode:

```bash
npm run test:headed
```

Notes

- Update selectors in `step-definitions/login.steps.ts` to match your application's login form.
- The feature file is at `features/login.feature`.
- Hooks that create/close Playwright contexts are in `support/hooks.ts`.
