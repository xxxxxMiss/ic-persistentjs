# persistentjs

> Use universal api to operate cookie,localStorage and sessionStorage

[![Build Status](https://img.shields.io/travis/xxxxxMiss/ic-persistentjs/master.svg)](https://travis-ci.org/xxxxxMiss/ic-persistentjs)
[![Codecov branch](https://img.shields.io/codecov/c/github/xxxxxMiss/ic-persistentjs/master.svg)](https://codecov.io/gh/xxxxxMiss/ic-persistentjs)
[![NPM](https://img.shields.io/npm/v/ic-persistentjs.svg)](https://www.npmjs.com/package/ic-persistentjs)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)

### Install

> \$ npm i ic-persistentjs || yarn add ic-persistentjs

### Usage

> We export an object contains three props: `ls`(localStorage), `ss`(sessionStorage), `cookie` and we also export `ls`, `ss`, `cookie` independently.

```js
import persistent, { ls, ss, cookie } from 'ic-persistentjs'
```

### api

- ls.setItem(key, value, options)
- ss.setItem(key, value, options)
  > use it same as native `setItem` on `localStorage`, but we enhanced it by passing an `options` as the third param.

If you want to persist some special data type like `RegExp`、 `Date` and `Function`, you can set `options.isJSON` to `false`.

```js
ls.setItem(
  'special',
  {
    date: new Date(),
    regexp: /test/,
    fn: function() {}
  },
  { isJSON: false }
)
```

#### options.expires

> How long the cookie is expired. It can be a string, number and Date.

string:

```js
cookie.setItem('name', 'tom', {
  expires: '7d' // '7days' or '7day'
})
```

available semantic string as below:

- 'years/year/yrs/yr/y'
- 'weeks/week/w'
- 'days/day/d'
- 'hours/hour/hrs/hr/h'
- 'minutes/minute/mins/min/m'
- 'seconds/second/secs/sec/s'
- 'milliseconds/millisecond/msecs/msec/ms'

number:

```js
cookie.setItem('name', 'tom', {
  expires: 7 // represent 7 days, as the same as '7days'|'7day'|'7d'
})
```

Date:

```js
cookie.setItem('name', 'tom', {
  expires: new Date(2088, 08, 08) // represent 7 days, as the same as '7days'|'7day'|'7d'
})
```

#### options.path

#### options.domain

#### options.secure

More informations about these options above, [see here](https://github.com/js-cookie/js-cookie).

### getItem(key)

> Get a json data with the key, or get all data without key(only available when type is cookie).

```js
// return null when not found the value of the key.
ls.getItem('name')
ss.getItem('name')

// return a empty object when not found the value of the key.
cookie.setiItem('name', 'test')
cookie.setiItem('obj', {
  name: 'test',
  age: 30
})
cookie.getItem('name') // output: 'test'
cookie.getItem() // output: {name: 'test', obj: { name: 'test, age: 30 }}
```

### removeItem(key, options)

> `options` is available only when called on cookie.

```js
ls.removeItem('name')
ss.removeItem('name')

cookie.removeItem('name', {
  path: '/path',
  domain: 'sub.domain.com'
})
```

### clear()

> remove all data.

```js
owner.clear()
```

### key(index)

> the same as the key method of `localStorage`.

```js
owner.index(0)
```

### length

> like the length property of `localStorage`.

```js
owner.length
```

_Note_: owner is `ls` or `ss` or `cookie`.
