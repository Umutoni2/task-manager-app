let todoList = document.getElementById("todoList");
let completedList = document.getElementById("completedList");

/* Counter Elements */
let totalCount = document.getElementById("totalCount");
let completedCount = document.getElementById("completedCount");
let remainingCount = document.getElementById("remainingCount");

/* Notification Element */
let notificationBox = document.getElementById("notification");

/* Load tasks when page opens */
window.onload = function () {
  loadTasks();
  updateCounter();
};

/* Show Notification */
function showNotification(message, color) {
  notificationBox.innerText = message;
  notificationBox.style.display = "block";
  notificationBox.style.background = color;

  setTimeout(() => {
    notificationBox.style.display = "none";
  }, 2000);
}

/* Add Task */
function addTask() {
  let text = document.getElementById("taskText").value;
  let priority = document.getElementById("priority").value;
  let dueDate = document.getElementById("dueDate").value;

  if (text === "") {
    alert("Please enter a task!");
    return;
  }

  createTodoTask(text, priority, dueDate);

  document.getElementById("taskText").value = "";
  document.getElementById("dueDate").value = "";

  saveTasks();
  updateCounter();

  showNotification("✅ Task Added Successfully!", "#d4edda");
}

/* Create To-Do Task */
function createTodoTask(text, priority, dueDate) {
  let li = document.createElement("li");

  li.innerHTML = `
    <div class="task-info">
      <span>${text}</span>
      <span class="priority">Priority: ${priority}</span>
      <small>Due: ${dueDate || "No deadline"}</small>
    </div>

    <div class="task-buttons">
      <button class="complete-btn" onclick="completeTask(this)">✔</button>
      <button class="delete-btn" onclick="deleteTask(this)">❌</button>
    </div>
  `;

  todoList.appendChild(li);
}

/* Complete Task */
function completeTask(button) {
  let taskItem = button.parentElement.parentElement;
  let info = taskItem.querySelector(".task-info").innerHTML;

  taskItem.remove();
  createCompletedTask(info);

  saveTasks();
  updateCounter();

  showNotification("🎉 Task Completed!", "#cce5ff");
}

/* Create Completed Task */
function createCompletedTask(infoHTML) {
  let li = document.createElement("li");

  li.innerHTML = `
    <div class="task-info" style="text-decoration: line-through;">
      ${infoHTML}
    </div>

    <div class="task-buttons">
      <button class="undo-btn" onclick="undoTask(this)">↩</button>
      <button class="delete-btn" onclick="deleteTask(this)">❌</button>
    </div>
  `;

  completedList.appendChild(li);
}

/* Undo Task */
function undoTask(button) {
  let taskItem = button.parentElement.parentElement;
  let info = taskItem.querySelector(".task-info").innerHTML;

  taskItem.remove();

  let tempDiv = document.createElement("div");
  tempDiv.innerHTML = info;

  let text = tempDiv.querySelector("span").innerText;
  let priority = tempDiv.querySelector(".priority").innerText.replace("Priority: ", "");
  let due = tempDiv.querySelector("small").innerText.replace("Due: ", "");

  createTodoTask(text, priority, due);

  saveTasks();
  updateCounter();

  showNotification("↩ Task Returned to To-Do!", "#fff3cd");
}

/* Delete Task */
function deleteTask(button) {
  button.parentElement.parentElement.remove();

  saveTasks();
  updateCounter();

  showNotification("❌ Task Deleted!", "#f8d7da");
}

/* Update Counter */
function updateCounter() {
  let todos = todoList.querySelectorAll("li").length;
  let completed = completedList.querySelectorAll("li").length;

  totalCount.innerText = todos + completed;
  completedCount.innerText = completed;
  remainingCount.innerText = todos;
}

/* Save Tasks */
function saveTasks() {
  localStorage.setItem("todoHTML", todoList.innerHTML);
  localStorage.setItem("completedHTML", completedList.innerHTML);
}

/* Load Tasks */
function loadTasks() {
  todoList.innerHTML = localStorage.getItem("todoHTML") || "";
  completedList.innerHTML = localStorage.getItem("completedHTML") || "";
}
