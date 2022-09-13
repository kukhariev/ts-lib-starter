import { expect } from 'chai';
import { pick } from './pick';

it('basic', () => {
  expect(pick({ k1: 1, k2: 2, k3: 3 }, ['k2'])).eql({ k2: 2 });
});
