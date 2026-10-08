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
  const taskCount = document.getElementById("taskCount");

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
    taskCount.textContent = `Task Count: ${taskList.children.length}`;

    taskInput.value = "";
    message.textContent = "Task added.";
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { validateTask };
}
