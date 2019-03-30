// TODO: how to let ts find a peerDependency?
import * as Cookies from 'js-cookie'
import { parseTimeStr } from './helpers'

function parseCookie() {
  const json = Cookies.getJSON()
  const pairs: any[] = []
  for (const key in json) {
    pairs.push([key, json[key]])
  }
  return new Map(pairs)
}

export default class Cookie {
  // constructor(config = {}) {
  //   Cookies.defaults = config
  // }

  setItem(key: string, value: any, config: Cookies.CookieAttributes = {}) {
    const expires = config.expires
    if (expires && typeof expires === 'string') {
      config.expires = parseTimeStr(expires)
    }
    if (expires === Infinity) {
      config.expires = new Date('Fri, 31 Dec 9999 23:59:59 GMT')
    }

    return Cookies.set(key, value, config)
  }

  getItem(key: string) {
    return Cookies.getJSON(key)
  }

  removeItem(key: string, config?: Cookies.CookieAttributes) {
    return Cookies.remove(key, config)
  }

  clear() {
    ;[...parseCookie().keys()].forEach((key: string) => {
      Cookies.remove(key)
    })
  }

  get length() {
    return parseCookie().size
  }

  key(index: number): any {
    return [...parseCookie().keys()][index]
  }
}