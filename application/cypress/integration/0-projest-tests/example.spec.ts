/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />
import { expect } from 'chai';

describe('Starting With Tests', () => {
  it('Does 2+2 equal 4?', () => {
    expect(2 + 2).to.equal(4);
  });
  it('Does 4+5 return 10?', () => {
    expect(4 + 5).to.equal(9);
  });
  it('Confirm if 5+5 does NOT give 100', () => {
    expect(5 + 5).to.not.equal(100);
  });
});
