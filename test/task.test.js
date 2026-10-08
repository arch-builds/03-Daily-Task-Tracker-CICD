const test = require("node:test");
const assert = require("node:assert/strict");
const { validateTask } = require("../script.js");

test("valid task is accepted", () => {
  const result = validateTask("Finish assignment");
  assert.equal(result.valid, true);
  assert.equal(result.task, "Finish assignment");
});

test("empty task is rejected", () => {
  const result = validateTask("");
  assert.equal(result.valid, false);
  assert.equal(result.message, "Please enter a task.");
});

test("task text is trimmed before being accepted", () => {
  const result = validateTask("  Review notes  ");
  assert.equal(result.valid, true);
  assert.equal(result.task, "Review notes");
});
