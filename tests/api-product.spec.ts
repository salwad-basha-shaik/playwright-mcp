import { test, expect, request } from '@playwright/test';
import Ajv from 'ajv';

test('GET /products/1 returns valid product data', async ({}) => {
  const apiContext = await request.newContext();
  const response = await apiContext.get('https://fakestoreapi.com/products/1');
  expect(response.status()).toBe(200);

  const data = await response.json();
  // Check required keys
  for (const key of ['id', 'title', 'price', 'category', 'description']) {
    expect(data).toHaveProperty(key);
  }

  // JSON Schema validation (optional)
  const schema = {
    type: 'object',
    properties: {
      id: { type: 'number' },
      title: { type: 'string' },
      price: { type: 'number' },
      category: { type: 'string' },
      description: { type: 'string' },
    },
    required: ['id', 'title', 'price', 'category', 'description'],
  };
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(data);
  expect(valid).toBe(true);

  // Log product title and price
  console.log(`Product: ${data.title}, Price: $${data.price}`);
});
