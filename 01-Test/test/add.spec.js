// Import add function from add.js
const add = require('../add')
const expect = require('expect')
const assert = require('assert')

// Test suite
// describe('add function', () => {
//     // Test spec (unit test)
//     it('adds two numbers', () => {
//         // Test case
//         // expect(add(1, 2)).toBe(3)
//         assert.equal(add(1, 2), 3)
//     })
// })

describe('The add function', () => {
    it('adds two numbers', () => {
        const actual = add(1, 3)
        const expected = 4

        // expect(actual).toBe(expected)
        assert.equal(actual, expected)
    })
})
