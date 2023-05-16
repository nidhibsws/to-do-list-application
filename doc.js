let tasks = [];

function addTask() {
  let newTaskInput = document.getElementById("newTaskInput");
  let task = newTaskInput.value;
  if (task !== "") {
    tasks.push({
      name: task,
      status: "not-started"
    });
    newTaskInput.value = "";
    displayTasks();}}
 
    function displayTasks() {
        let taskList = document.getElementById("taskList");
        taskList.innerHTML = "";
        for (let i = 0; i < tasks.length; i++) {
          let taskItem = document.createElement("li");
          taskItem.innerHTML = tasks[i].name;
          taskItem.className = tasks[i].status;
          let deleteButton = document.createElement("button");
          deleteButton.innerHTML = "Delete";
          deleteButton.addEventListener("click", function() {
            deleteTask(i);
          });
          taskItem.appendChild(deleteButton);
          let statusButtons = document.createElement("div");
          statusButtons.className = "status-buttons";
          let notStartedButton = document.createElement("button");
          notStartedButton.innerHTML = "Not Started";
          notStartedButton.addEventListener("click", function() {
            updateTaskStatus(i, "not-started");
          });
          statusButtons.appendChild(notStartedButton);
          let inProgressButton = document.createElement("button");
          inProgressButton.innerHTML = "In Progress";
          inProgressButton.addEventListener("click", function() {
            updateTaskStatus(i, "in-progress");
          });
          statusButtons.appendChild(inProgressButton);
          let completedButton = document.createElement("button");
          completedButton.innerHTML = "Completed";
          completedButton.addEventListener("click", function() {
            updateTaskStatus(i, "completed");
          });
          statusButtons.appendChild(completedButton);
          taskItem.appendChild(statusButtons);
          taskList.appendChild(taskItem);
        }
      }
      
      function deleteTask(index) {
        tasks.splice(index, 1);
        displayTasks();
      }
      
      function updateTaskStatus(index, status) {
        tasks[index].status = status;
        displayTasks();
      }
      
      displayTasks();
          