import { Selector } from "testcafe";

fixture("Empty email field");
test.page("http://localhost:9888/admin/login")(
  "Empty email, throwas error",
  async (t) => {
    await t
      .click("#app > div > form > button")
      .expect(Selector("#app > div > form > div:nth-child(1) > div").innerText)
      .eql("The Email field is required.")
      .takeScreenshot();
  }
);

fixture("Empty password field");
test.page("http://localhost:9888/admin/login")(
  "Empty email, throwas error",
  async (t) => {
    await t
      .click("#app > div > form > button")
      .expect(Selector("#app > div > form > div:nth-child(2) > div").innerText)
      .eql("The Password field is required.")
      .takeScreenshot();
  }
);

fixture("Empty password field");
test.page("http://localhost:9888/admin/login")(
  "Empty password, throwas error",
  async (t) => {
    await t
      .click("#app > div > form > button")
      .expect(Selector("#app > div > form > div:nth-child(2) > div").innerText)
      .eql("The Password field is required.")
      .takeScreenshot();
  }
);

fixture("Successful login");
let email = "tt@t.com";
let password = "test";
test.page("http://localhost:9888/admin/login")(
  "Empty email, throwas error",
  async (t) => {
    await t
      .typeText("#loginEmail", email)
      .typeText("#loginPassword", password)
      .click("#app > div > form > button")
      .expect(
        Selector(
          "#app > div.container > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a > span"
        ).innerText
      )
      .eql("New post")
      .takeScreenshot();
  }
);
