document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskUl = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", createNewTask);
});

const addNewTask = (task) => {
  document.getElementById("tasks").appendChild(task);
};

const createNewTask = (event) => {
  event.preventDefault();
  newTask.innerText = newTaskDescription.value;
  addNewTask(newTask);
  
};

