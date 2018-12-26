import {expect} from 'chai'

describe('hello', () => {
  it('should give hello words to given name', () => {
    global.hello = 'Hello, typescript!';
    expect(global.hello).to.equal('Hello, typescript!')
  })
});

