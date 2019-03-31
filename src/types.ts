import * as Cookies from 'js-cookie'
import * as serialize from 'serialize-javascript'

export interface LocalAndSessionStorage {
  setItem(key: string, value: any, config?: serialize.SerializeJSOptions): void
  getItem(key: string): string | null
  removeItem(key?: string): void
  clear(): void
  key(index: number): string | null
  length: number
}

export interface PersistCookie {
  setItem(key: string, value: any, config?: Cookies.CookieAttributes): void
  getItem(key: string): { [key: string]: any }
  removeItem(key: string, config?: Cookies.CookieAttributes): void
  clear(): void
  key(index: number): string | undefined
  readonly length: number
}
