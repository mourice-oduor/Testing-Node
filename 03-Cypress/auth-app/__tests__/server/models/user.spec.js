// const User = require('../../server/models/User')
import User from "@models/User";
import { connect, disconnect } from "mongoose";
import { compareSync } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "@config";

describe("User model", () => {
  beforeAll(async () => {
    await connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await disconnect();
  });

  // test('should hash password before saving')
  it("should hash the password before saving", async () => {
    const user = new User({
      name: "John Doe",
      email: "john@gmail.com",
      password: "password",
    });

    await user.save();

    expect(user.password).not.toBe("password");
    expect(compareSync("password", user.password)).toBe(true);
  });

  // test('should generate a token')
  it("should set an email confirmation token", async () => {
    const user = new User({
      name: "John Doe",
      email: "johndoe@gmail.com",
      password: "password",
    });

    await user.save();

    expect(user.emailConfirmationToken).not.toBe(null);

    // expect to be any string
    // expect(decoded).toEqual(expect.any(Object))
    // expect(user.emailConfirmationToken).toEqual(expect.any(String))
  });
});

// Testing the User model with instance methods
describe("User model", () => {
  const user = new User({
    name: "John Doe",
    email: "john@gmail.com",
    password: "password",
  });

  beforeAll(async () => {
    await connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await user.save();
  });

  afterAll(async () => {
    await disconnect();
  });

  // test('should hash password before saving')
  it("should hash the password before saving", async () => {
    expect(user.password).not.toBe("password");
    expect(compareSync("password", user.password)).toBe(true);
  });

  // test('should generate a token')
  it("should set an email confirmation token", async () => {
    expect(user.emailConfirmationToken).not.toBe(null);
  });

  // test('should generate a valid jwt for a user')
  it("should generate a valid jwt for a user", async () => {
    const token = user.generateToken();

    // const { id } = sign(token, '1234');
    const { id } = sign(token, JWT_SECRET);

    // console.log(typeof user._id);
    // parse the id from the token to string
    // expect(id).toBe(user._id.toString());

    // stringify the id from the token and parse it to string
    // expect(id).toEqual(JSON.parse(JSON.stringify(user._id)));
  });
});
