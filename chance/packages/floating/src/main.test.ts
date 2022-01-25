import { floating } from './main'
import test from 'ava'

test('floating() returns a random floating', (t) => {
  t.is(typeof floating(), 'number')
})

test('floating() can take both a max and min and obey them both', (t) => {
  for (let i = 0; i < 10; i++) {
    const float = floating({ min: 90, max: 100 })
    // console.log(float)
    t.true(float > 89, `Expected float to be greater than 89, got ${float}`)
    t.true(float < 101, `Expected float to be smaller than 101, got ${float}`)
  }
})

test('floating() will not take fixed + min that would be out of range', (t) => {
  const fn = () => floating({ min: -9007199254740992, fixed: 13 })
  t.throws(fn, "Chance: Min specified is out of range with fixed. Min should be, at least, -900.7199254740992")
})

test('floating() will not take fixed + max that would be out of range', (t) => {
  const fn = () => floating({ max: 9007199254740992, fixed: 13 })
  t.throws(fn, "Chance: Max specified is out of range with fixed. Max should be, at most, 900.7199254740992")
})

test('floating() obeys the fixed parameter, when present', (t) => {
  for (let i = 0; i < 10; i++) {
    const float = floating({ fixed: 4 })
    const decimals = float.toString().split('.')[1] ? float.toString().split('.')[1] : ''
    t.true(decimals.length < 5)
  }
})

test('floating() can take fixed and obey it', (t) => {
  for (let i = 0; i < 10; i++) {
    const float = floating({ fixed: 3 })
    const parsed = parseFloat(float.toFixed(3))
    t.is(float, parsed)
  }
})
