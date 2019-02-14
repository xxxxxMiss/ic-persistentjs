/**
 *  created at 2018/08/14 11:56 by xxxxxMiss
 */
import Storage from './storage'
import Cookie from './cookie'

export const ls = new Storage('local')

export const ss = new Storage('session')

export const cookie = new Cookie()

export default {
  ls,
  ss,
  cookie
}
