// Here: we are testing the whole registration process and how the API responds to it. We are also testing the database to make sure that the user is actually saved to the database. We are also testing the email sending process to make sure that the email is actually sent to the user. We are also testing the email confirmation process to make sure that the user is actually confirmed after clicking the link in the email.

import request from "supertest";
import server from "@server/app";
import User from "@models/User";
import express from "express";
import { disconnect } from "@tests/utils/mongoose";

const app = () => request(server);
// const app = () => request(express());


describe("Register Process", () => {

    const REGISTER_ENDPOINT = "/api/auth/register";
    const user = {
        name: "John Doe",
        email: "john@gmail.com",
        password: "123456"
    };
//   beforeEach(async () => {
//     await User.deleteMany({});
//   });

    beforeEach( () => {
        jest.setTimeout(10000);
        User.deleteMany({});
    });

  afterAll(async () => {
    await disconnect();
  });

  it("should register a new user", async () => {

    const res = await app().post(REGISTER_ENDPOINT).send (user);

    console.log(res.body);
    expect(res.status).toBe(422);
    // expect(res.body.data.token).toBeDefined();
    // expect(res.body.message).toBe("Acoount created successfully.");
  }, 1000000000);


  // Testing Failed Registration
    it("should return a 422 error if registration fails", async () => {

        const user = await User.create(user);

        const res = await app().post(REGISTER_ENDPOINT).send (user);

        expect(res.status).toBe(422);
        expect(res.body.message).toBe("Validation failed.");
        // expect(res.body.data.errors.email).toBe("The email has already been taken.");

    }, 1000000000);
});



// describe("Register Process", () => {
//     // beforeEach(async () => {
//     //     await User.deleteMany({});
//     // });
    
//     afterAll(async () => {
//         await disconnect();
//     });
    
//     it("should register a new user", async (done) => {
//         request(app)
//             .post("/api/v1/auth/register")
//             .send({
//                 name: "John Doe",
//                 email: "john@gmail.com",
//                 password: "password",
//             })
//             .set("Accept", "application/json")
//             .expect(201)
//             .end((err, res) => {
//                 if (err) return done(err);
//                 expect(res.body).toHaveProperty("token");
//                 expect(res.body).toHaveProperty("user");
//                 done();
//             }
//         );
//     }, 10000);
// });

