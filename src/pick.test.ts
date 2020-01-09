import { pick } from './pick';

test('basic', () => {
  expect(pick({ k1: 1, k2: 2, k3: 3 }, ['k2'])).toEqual({ k2: 2 });
});
