/**
 *  created at 2018/08/14 11:56 by xxxxxMiss
 */
import Storage from './storage'
import Cookie from './cookie'
import { LocalAndSessionStorage, PersistCookie } from './index.d'

export const ls: LocalAndSessionStorage = new Storage('local')

export const ss: LocalAndSessionStorage = new Storage('session')

export const cookie: PersistCookie = new Cookie()

export default {
  ls,
  ss,
  cookie
}
