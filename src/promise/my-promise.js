/**
 * @description promise A+ manual code
 * @createDate 2021/11/25
 * @reference https://juejin.cn/post/6945319439772434469#heading-1
 */
// promise三种状态
const PENDING = 'pending'
const FULLFILLED = 'fullfilled'
const REJECTED = 'rejected'

class MyPromise {
  // 当前promise的状态
  status = PENDING
  // 缓存fullfilled的值
  value = null
  // 缓存reject值
  reason = null
  // fullfilled callbacks
  onFullfilledCallbacks = []
  // rejected callbacks
  onRejectedCallbacks = []

  constructor (executor) {
    // 实例化promise时，会立即执行一个执行器
    this.callWithErrorHandler(executor.bind(null, this.resolve.bind(this), this.reject.bind(this)))
  }
  // resolve、reject触发promise状态改变，此改变是不可逆的
  resolve (value) {
    // 防止重复resolve
    if (this.status === PENDING) {
      this.status = FULLFILLED
      this.value = value
      // 调用当前promise实例的回调方法
      while (this.onFullfilledCallbacks.length) {
        this.onFullfilledCallbacks.shift()(this.value)
      }
    }
  }

  reject (reason) {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.reason = reason
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(this.reason)
      }
    }
  }
  /**
   * @description 创建新的promise实例，实现链式调用
   * @returns newMyPromise
  */
  then (onFullfilled = value => value, onRejected = error => {throw error}) {
    let self = this
    let newMyPromise = new MyPromise((resolve, reject) => {
      // 包装回调方法
      let realOnFulfilled = this.wrapperCallbacks(onFullfilled, self, resolve, reject)
      let realOnRejected = this.wrapperCallbacks(onRejected, self, resolve, reject)
      // pending状态，缓存回调方法
      if (this.status === PENDING) {
        // 同一种状态允许存在多个回调方法
        this.onFullfilledCallbacks.push(realOnFulfilled)
        this.onRejectedCallbacks.push(realOnRejected)
      } else if (this.status === FULLFILLED) {
        // 状态已经改变的，直接调用
        this.callWithErrorHandler(realOnFulfilled.bind(null, this.value))
      } else if (this.status === REJECTED) {
        this.callWithErrorHandler(realOnRejected.bind(null, this.reason))
      }
    })
    return newMyPromise
  }
  // rejected回调方法
  catch (onRejected) {
    this.then(undefined, onRejected)
  }
  // promise then/catch都是微任务
  wrapperCallbacks (fn, newMyPromise, resolve, reject) {
    // value为resolve，reject时参数
    return value => {
      queueMicrotask(() => {
        // 获取then回调方法返回值，方便链式调用
        let result = this.callWithErrorHandler(fn.bind(null, value))
        if (result === null) return resolve(result)
        if (result instanceof MyPromise) {
          // 需要将promise值传递给下一个promise
          result.then(res => resolve(res))
        } else {
          resolve(result)
        }
      })
    }
  }
  // 调用方法增加异常捕获
  callWithErrorHandler (cb) {
    try {
      return cb.call(null)
    } catch (error) {
      this.reject(error)
    }
  }
}

module.exports = MyPromise