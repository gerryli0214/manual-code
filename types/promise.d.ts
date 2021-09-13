export interface MyPromiseInterface {
  then (successCb: Function, errorCb?: Function): MyPromiseInterface
  catch (errorCb: Function): void
  finally (cb: Function): void
}

export enum StatusEnum {
  PENDING = 'pending',
  FULLFILLED = 'fullfilled',
  REJECT = 'reject'
}
