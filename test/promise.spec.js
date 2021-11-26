// const $require = require('esm')(module)
const MyPromise = require('../src/promise/my-promise')
const expect = require('expect.js')

describe('Start test my-promise function', function () {
  let myPromise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello World')
    }, 1000)
  })
  let myPromise2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(123)
    }, 2000)
  })
  it('should myPromise can be resolved', function () {
    this.timeout(0)
    return new Promise((resolve, reject) => {
      myPromise.then(res => {
        expect(res).to.be('Hello World')
        resolve()
      })
    })
  })
  it('should myPromise can be reject', function () {
    this.timeout(0)
    let rejectPromise = new MyPromise((resolve, reject) => {
      setTimeout(() => {
        reject(123)
      }, 1000)
    })
    return new Promise((resolve, reject) => {
      rejectPromise.catch(res => {
        expect(res).to.be(123)
        resolve()
      })
    })
  })
  it('should error can be catched', function () {
    this.timeout(0)
    let rejectPromise = new MyPromise((resolve, reject) => {
      throw new Error('This is a error')
    })
    return new Promise((resolve, reject) => {
      rejectPromise.catch(res => {
        resolve()
      })
    })
  })
  it('should myPromise can be called anytime', function () {
    this.timeout(0)
    return new Promise((resolve, reject) => {
      myPromise.then(res => {
        expect(res).to.be('Hello World')
        resolve()
      })
      myPromise.then(res => {
        expect(res).to.be('Hello World')
        resolve()
      })
    })
  })
  it('should myPromise can call scoped', function () {
    this.timeout(0)
    return new Promise((resolve, reject) => {
      myPromise.then(res => {
        expect(res).to.be('Hello World')
        return myPromise2
      }).then(res => {
        expect(res).to.be(123)
        resolve()
      })
    })
  })
})