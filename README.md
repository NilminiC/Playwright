# Playwright UI Automation Assessment

## Project Overview

This Project contains a Playwright UI automation test scenarios for [https://the-internet.herokuapp.com]

## Implemented Test Scenarios

1. Checkboxes
   - Ensures both checkboxes end up checked
2. Inputs
    - Types numeric input and validates value
3. Dynamic Controls
    - Removes checkbox and validates confirmation message
    - Enables input field and validates enabled state
4. Login Flow
    - Valid login using Username and Password
    - Invalid login validation with error message

## Design Decisions & Rationale

* Page Object Model (POM)
    - All locators and low-level interactions are encapsulated in page classes
    - Keeps tests clean and declarative
* Component Objects
    - Common UI elements (e.g. Button) extracted into reusable components
    - Avoids duplication across page objects
* Fixtures
    - Custom login fixture (auth.fixture.ts) provides reusable authenticated state
    - Keeps setup logic out of tests
* Environment Configuration
    - Base URL is managed via env.config.ts
* Supports environment overrides using environment variables
    - Linting & Formatting
* ESLint v9 (flat config) for static analysis
    - Prettier for consistent formatting
    - Ensures clean, readable, and professional codebase

## Setup Instructions

1. Clone the repository:
git clone <repository-url>
cd <repository-folder>

2. Install dependencies:
npm install

3. Install Playwright browsers:
npx playwright install

4. Add ".env" file in the project root with the base URL:
BASE_URL=https://the-internet.herokuapp.com

## Running Tests

- Run all tests (headless)
npx playwright test

- Run tests in headed mode
npx playwright test --headed

- Interactive Playwright UI
npx playwright test --ui

- Run a specific test file
npx playwright test tests/login.spec.ts

- Run tests for a specific browser (simulating the matrix)
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit


## HTML Report
After running tests:
npx playwright show-report

Includes test status, error messages, screenshots, and traces.

## Debugging & Tracing
Tracing enabled on first retry:
trace: 'on-first-retry'

View trace manually:
npx playwright show-trace trace.zip

## Linting & Formatting

- Lint
    npm run lint

- Format
    npm run format

