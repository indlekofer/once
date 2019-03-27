import assert from 'assert';

import once from '../src/index';

describe('once', () => {
  it('can be called only once', () => {
    var params = {x: 0};
    var once1 = once((v)=> {
      ++v.x;
    });
    //x increased by one = 1
    once1(params);
    //not called
    once1(params);

    assert.equal(params.x, 1);
  });
});
