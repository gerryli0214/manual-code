import { MyPromiseInterface, StatusEnum } from "../../types/promise";

class MyPromise implements MyPromiseInterface{
  // 当前promise状态
  private _status: string = StatusEnum.PENDING

  constructor (executor) {
    // 实例化promise时，需要调用执行器
    executor.call(this, this._resolve, this._reject)
  }

  private _resolve () {
    this._status = StatusEnum.FULLFILLED
    this.then.apply(this, [...arguments])
  }

  private _reject () {
    this._status = StatusEnum.REJECT
  }

  then(successCb: Function, errorCb: Function): MyPromiseInterface {
    // 链式回调
    return this
  }
  catch(cb: Function): void {
    throw new Error("Method not implemented.");
  }
  finally(cb: Function): void {
    throw new Error("Method not implemented.");
  }
}

export default MyPromise