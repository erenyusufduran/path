## What are software tests?
- Code that runs other code and makes assertions and checks
- Tests are requirements/specifications
- What is unit?
  - Method
  - Class
  - Module
- Types of software tests: unit, integration, end-to-end(UIs)

## Why we need automated tests?
- Peace of mind as a developer/tester
- Catch bugs early
  - Spend 1 hour for tests, win 3 hours of debugging
- Unit test impose high code quality
  - If a unit is too difficult to test, the code quality should be improved
- Prevent endless manual tests
- Think big: a TODO list doesn't need tests

## What is Jest
- JS, TS testing framework
- Developed by Facebook
- Assertion library
  - Powerful set of matchers
- Most popular test framework
- All in one solution (test runner, asserting library, matchers)

## Structure of a properly written unit test:
**AAA Principles:**
- Arrange
- Act
- Assert
 ***
 - Setup
 - Teardown