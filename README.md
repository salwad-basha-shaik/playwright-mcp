# Playwright API Test Example

This project demonstrates how to use Playwright’s API testing capabilities to validate a REST API endpoint.

## Scenario

- Target API: `https://fakestoreapi.com/products/1`
- The test sends a GET request to the endpoint.
- It verifies the response status is 200.
- It checks the response contains the keys: `id`, `title`, `price`, `category`, and `description`.
- It validates the response schema using Ajv (JSON Schema).
- It logs the product title and price to the console.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the test:
   ```bash
   npx playwright test tests/api-product.spec.ts
   ```

3. View the test report:
   ```bash
   npx playwright show-report
   ```

## Notes

- The test uses async/await and Playwright’s `request` context.
- Ajv is used for JSON Schema validation.
- Logs are printed for debugging and verification.
