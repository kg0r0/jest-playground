import { sum } from './foo';

test('Example basic', () => {
  expect(sum()).toBe(0);
});

test('Example basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Example async basic', async () => {
  expect(sum()).toBe(0);
});

test('Example async basic again', async () => {
  expect(sum(1, 2)).toBe(3);
}, 1000 /* optional timeout */);