import * as serialize_ from 'serialize-javascript'
import { deserialize } from './helpers'

const serialize = serialize_
export default class Storage {
  public readonly storage:
    | WindowLocalStorage['localStorage']
    | WindowSessionStorage['sessionStorage']

  constructor(type: string) {
    if (type === 'local') {
      this.storage = window.localStorage
    }
    if (type === 'session') {
      this.storage = window.sessionStorage
    }
  }

  public setItem(key: string, value: any, config = {}) {
    const newConf = { isJSON: true, ...config }
    return this.storage.setItem(key, serialize(value, newConf))
  }

  public getItem(key: string) {
    const data = this.storage.getItem(key)
    return data ? deserialize(data) : null
  }

  public removeItem(key: string) {
    return key ? this.storage.removeItem(key) : this.storage.clear()
  }

  public clear() {
    return this.storage.clear()
  }

  public get length() {
    return this.storage.length
  }

  public key(index: number) {
    return this.storage.key(index)
  }
}
