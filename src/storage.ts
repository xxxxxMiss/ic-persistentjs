import * as serialize from 'serialize-javascript'
import { deserialize } from './helpers'

export default class Storage {
  storage:
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

  setItem(key: string, value: any, config = {}) {
    config = Object.assign({}, { isJSON: true }, config)
    return this.storage.setItem(key, serialize(value, config))
  }

  getItem(key: string) {
    const data = this.storage.getItem(key)
    return data ? deserialize(data) : null
  }

  removeItem(key: string) {
    return key ? this.storage.removeItem(key) : this.storage.clear()
  }

  clear() {
    return this.storage.clear()
  }

  get length() {
    return this.storage.length
  }

  key(index: number) {
    return this.storage.key(index)
  }
}
