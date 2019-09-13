import { pick } from '.';

test('basic', () => {
  expect(pick({ '2': '3' }, ['2'])).toEqual({ '2': '3' });
});
