const expect = require('expect.js')
const MyPromise = require('../src/promise/my-promise')

describe('Start test my-promise function', function () {
  debugger
  let myPromise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello World')
    }, 2000)
  })
  it('should myPromise can be resolved', function () {
    this.timeout(0)
    myPromise.then(res => {
      debugger
      expect(res).to.be('Hello World')
    })
  })
})
