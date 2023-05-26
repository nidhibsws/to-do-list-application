# to-do-list

A web application that allows users to create and manage a list of tasks. The main features of the project include the ability to add tasks, mark them as completed, and delete tasks. The project provides a user-friendly interface where users can easily interact with the TODO list.

Users can enter new tasks in the input field and click the "Add" button to add them to the TODO list. The JavaScript code captures the task input, creates a task object, and adds it to an array that holds all the tasks. The displayTasks() function is responsible for updating the list of tasks on the web page based on the current state of the tasks array.

Task Status: Each task in the TODO list has a status associated with it, such as "not-started", "in-progress", or "completed". Users can click on a task to toggle its status between these options. The JavaScript code handles the status changes and updates the visual representation of the tasks accordingly.

Task Deletion: Users can remove tasks from the TODO list by clicking on a delete button associated with each task. The JavaScript code tracks the index of the task to be deleted and removes it from the tasks array. The displayTasks() function is called to update the list and reflect the changes.
