import Cookie from '../src/cookie'
import Storage from '../src/storage'
import persist, { ls, ss, cookie } from '../src'

test('persist have three props ', () => {
  expect(Object.keys(persist)).toHaveLength(3)

  expect(persist).toHaveProperty('ls')
  expect(persist).toHaveProperty('ss')
  expect(persist).toHaveProperty('cookie')

  expect(ls).toBeInstanceOf(Storage)
  expect(ss).toBeInstanceOf(Storage)
  expect(cookie).toBeInstanceOf(Cookie)
})
