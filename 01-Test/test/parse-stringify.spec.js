const { parse, stringify } = require("../parse-stringify");
// const assert = require("assert");

// Using Jest to test the parse and stringify functions from parse-stringify.js file in the root folder of the project (01-Test) folder
describe("The parse function", () => {
  it("parses a query string into an object", () => {
    const actual = parse("?by=mourice-oduor");
    const expected = { by: "mourice-oduor" };

    // expect(actual).toEqual(expected);

    // deepEqual is used to compare objects and arrays in javascript and it is a method of the assert module in node
    // assert.deepEqual(actual, expected);
    expect(actual).toEqual(expected);
  });
});

describe("The stringify function", () => {
  it("stringifies an object into a query string", () => {
    const actual = stringify({ by: "mourice-oduor" });
    const expected = "by=mourice-oduor";

    // expect(actual).toEqual(expected);

    // here we are using the strictEqual method of the assert module to compare two values and it is used to compare primitive values
    // assert.equal(actual, expected);
    expect(actual).toEqual(expected);
  });
});


