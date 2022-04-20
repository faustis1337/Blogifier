import { Selector } from "testcafe";

fixture("Empty email field");
test.page("http://localhost:9888/admin/register")(
  "Empty email, throwas error",
  async (t) => {
    await t
      .click("#app > div > form > button")
      .expect(Selector("#app > div > form > div:nth-child(1) > div").innerText)
      .eql("The Email field is required.")
      .takeScreenshot();
  }
);

fixture("Empty name field");
test.page("http://localhost:9888/admin/register")(
  "Empty name, throwas error",
  async (t) => {
    await t
      .click("#app > div > form > button")
      .expect(Selector("#app > div > form > div:nth-child(2) > div").innerText)
      .eql("The Name field is required.")
      .takeScreenshot();
  }
);

fixture("Empty password field");
test.page("http://localhost:9888/admin/register")(
  "Empty password, throwas error",
  async (t) => {
    await t
      .click("#app > div > form > button")
      .expect(Selector("#app > div > form > div:nth-child(3) > div").innerText)
      .eql("The Password field is required.")
      .takeScreenshot();
  }
);

fixture("Password fields don't match");
let password = "test";
let notMatchingPassword = "badPass";
test.page("http://localhost:9888/admin/register")(
  "Empty password, throwas error",
  async (t) => {
    await t
      .typeText("#registerPassword", password)
      .typeText("#registerConfirmPassword", notMatchingPassword)
      .click("#app > div > form > button")
      .expect(Selector("#app > div > form > div:nth-child(4) > div").innerText)
      .eql("Passwords do not match")
      .takeScreenshot();
  }
);

// This will not run without rebuilding as the email will be used and reg not valid
fixture("Password fields don't match");
let email = "tt@t.com";
let name = "Name";
test.page("http://localhost:9888/admin/register")(
  "Empty password, throwas error",
  async (t) => {
    await t
      .typeText("#registerEmail", email)
      .typeText("#registerName", name)
      .typeText("#registerPassword", password)
      .typeText("#registerConfirmPassword", password)
      .click("#app > div > form > button")
      .expect(Selector("#app > div > form > button").innerText)
      .eql("Login")
      .takeScreenshot();
  }
);
