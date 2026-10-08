function validateTask(taskText) {
  const task = String(taskText).trim();

  if (task === "") {
    return {
      valid: false,
      message: "Please enter a task."
    };
  }

  return {
    valid: true,
    task
  };
}

if (typeof document !== "undefined") {
  const form = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const message = document.getElementById("message");
  const taskList = document.getElementById("taskList");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const result = validateTask(taskInput.value);

    if (!result.valid) {
      message.textContent = result.message;
      return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = result.task;
    taskList.appendChild(listItem);

    taskInput.value = "";
    message.textContent = "Task added.";
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { validateTask };
}
