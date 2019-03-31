import * as Cookies_ from 'js-cookie'
import { parseTimeStr } from './helpers'

const Cookies = Cookies_

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

  public setItem(
    key: string,
    value: any,
    config: Cookies.CookieAttributes = {}
  ) {
    const expires = config.expires
    if (expires && typeof expires === 'string') {
      config.expires = parseTimeStr(expires)
    }
    if (expires === Infinity) {
      config.expires = new Date('Fri, 31 Dec 9999 23:59:59 GMT')
    }

    return Cookies.set(key, value, config)
  }

  public getItem(key: string) {
    return Cookies.getJSON(key)
  }

  public removeItem(key: string, config?: Cookies.CookieAttributes) {
    return Cookies.remove(key, config)
  }

  public clear() {
    ;[...parseCookie().keys()].forEach((key: string) => {
      Cookies.remove(key)
    })
  }

  public get length() {
    return parseCookie().size
  }

  public key(index: number): any {
    return [...parseCookie().keys()][index]
  }
}
