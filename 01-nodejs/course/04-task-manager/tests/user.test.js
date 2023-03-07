const request = require("supertest");
const app = require("../src/app");

test("Should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Eren",
      email: "qweqwrte@gmail.com",
      password: "pass7985ew4",
    })
    .expect(201);
});
