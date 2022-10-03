const { expect } = require("expect");
const { findUserByEmail, findUserById } = require("../users");
// const assert = require("assert");

// 1. Test the find User by email function
// a. Test that the function returns a promise

// Using Jest
describe("findUserByEmail function", () => {
  // a. Test using a function
  it("findUserByEmail (using a function)", (done) => {
    // call the function
    findUserByEmail("morys0@gmail.com")
      .then((response) => {
        // assert that the response is a promise
        // assert.equal(response.message, "User found successfully.");
        expect(response.message).toBe("User found successfully.");

        // call done to end the test
        done();

        // catch any errors
      })
      .catch((error) => {
        // call done to end the test
        done(error);
      });
  });

  // b. using the return promise method
  it("findUserByEmail (should return a promise)", () => {
    // call the function
    return findUserByEmail("morys0@gmail.com").then((response) => {
      // assert that the response is a promise
      // assert.equal(response.message, "User found successfully.");
      expect(response.message).toBe("User found successfully.");
    });
  });

  // c. using the async await method
  it("findUserByEmail (using async await method))", async () => {
    // call the function
    const response = await findUserByEmail("morys0@gmail.com");
    // assert that the response is a promise
    // assert.equal(response.message, "User found successfully.");
    expect(response.message).toBe("User found successfully.");
  });

  // d. using the async await method with try catch
  it("findUserByEmail (using async await method with try catch))", async () => {
    // call the function
    try {
      const response = await findUserByEmail("morys0@gmail.com");
      // assert that the response is a promise
      // assert.equal(response.message, "User found successfully.");
      expect(response.message).toBe("User found successfully.");
    } catch (error) {
      console.log(error);
    }
  });

  // e. rejects with an error if the user with the email is not found
  it("findUserByEmail (should reject with an error if the user with the email is not found)", () => {
    // call the function
    // return findUserByEmail("morris@2090").catch((error) => {
    //   // assert that the response is a promise
    //   // assert.equal(
    //   //   error.message,
    //   //   "User with email: morris@2090 was not found."
    //   // );

    //   expect(error.message).toBe(
    //     "User with email: morris@2090 was not found."
    //   );

    // });

    const actual = findUserByEmail("morris@2090");
    // const expected = Promise.reject(
    //   new Error("User with email: morris@2090 was not found.")
    // );

    // // expect(actual).rejects.toEqual(expected);
    // expect(actual).rejects.toThrow(expected);

    // OR 
    expect(actual).rejects.toThrow(
      new Error("User with email: morris@2090 was not found.")
    );

    // OR
    expect(actual).rejects.toEqual(
      new Error("User with email: morris@2090 was not found.")
    );

  });
});

// 2. Test the find User by id function
// a. Test that the function returns a promise

describe("findUserById function", () => {
  // a. Test using a function
  it("findUserById (using a function)", (done) => {
    // call the function
    findUserById(1)
      .then((response) => {
        // assert that the response is a promise
        // assert.equal(response.message, "User found successfully.");
        expect(response.message).toBe("User found successfully.");

        // call done to end the test
        done();

        // catch any errors
      })
      .catch((error) => {
        // call done to end the test
        done(error);
      });
  });

  // b. using the return promise method
  it("findUserById (should return a promise)", () => {
    // call the function
    return findUserById(1).then((response) => {
      // assert that the response is a promise
      // assert.equal(response.message, "User found successfully.");
      expect(response.message).toBe("User found successfully.");
    });
  });

  // c. using the async await method
  it("findUserById (using async await method))", async () => {
    // call the function
    const response = await findUserById(1);
    // assert that the response is a promise
    // assert.equal(response.message, "User found successfully.");
    expect(response.message).toBe("User found successfully.");
  });

  // d. using the async await method with try catch
  it("findUserById (using async await method with try catch))", async () => {
    // call the function
    try {
      const response = await findUserById(1);
      // assert that the response is a promise
      // assert.equal(response.message, "User found successfully.");
      expect(response.message).toBe("User found successfully.");
    } catch (error) {
      console.log(error);
    }
  });

  // e. rejects with an error if the user with the id is not found
  it("findUserById (should reject with an error if the user with the id is not found)", () => {
    // call the function
    // return findUserById(100).then(
    //   () => {
    //     // assert that the response is a promise
    //     // assert.fail("This should not have passed");
    //     expect(true).toBe(false);
    //   },
    //   (error) => {
    //     // assert.equal(error.message, "User with id: 100 was not found.");
    //     expect(error.message).toBe("User with id: 100 was not found.");
    //   }
    // );

    // call the function
    const actual = findUserById(100);

    expect(actual).rejects.toThrow(
      new Error("User with id: 100 was not found.")
    );

    // OR
    expect(actual).rejects.toEqual(
      new Error("User with id: 100 was not found.")
    );
    
  });
});
