import { MyPromiseInterface, StatusEnum } from "../../types/promise";

class MyPromise implements MyPromiseInterface{
  // 当前promise状态
  public status: string = StatusEnum.PENDING

  private _successCbList: Array<Function> = []

  private _failedCbList: Array<Function> = []

  private _finnalCbList: Array<Function> = []

  constructor (executor) {
    // 实例化promise时，需要调用执行器
    executor.call(this, this._resolve, this._reject)
  }

  private _resolve () {
    this.status = StatusEnum.FULLFILLED
    // 调用回调方法
    this._callCbWithErrorHandler.apply(this, [this._successCbList, ...arguments])
  }

  private _reject () {
    this.status = StatusEnum.REJECT
    this._callCbWithErrorHandler.apply(this, [this._failedCbList, ...arguments])
  }
  // 调用回调
  private _callCbWithErrorHandler (cbList: Array<Function>): void {
    for (let index = 0; index < cbList.length; index++) {
      const cb = cbList[index]
      try {
        cb.apply(null, [...arguments].slice(1))
      } catch (error) {
        throw error
      }
    }
  }

  then(successCb: Function, failedCb: Function): MyPromiseInterface {
    // 缓存回调方法
    this._successCbList.push(successCb)
    this._failedCbList.push(failedCb)
    // 链式回调
    return this
  }
  catch(cb: Function): void {
    this._failedCbList.push(cb)
  }
  finally(cb: Function): void {
    this._finnalCbList.push(cb)
  }
}

export default MyPromise