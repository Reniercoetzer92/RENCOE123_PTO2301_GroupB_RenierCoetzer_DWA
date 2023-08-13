/**
 * @typedef {object} Tasks
 * @prop {string} id - The unique identifier of the task.
 * @prop {string} title - The title of the task.
 * @prop {boolean} completed - Indicates whether the task is completed or not.
 * @prop {Date} created - The date when the task was created.
 * @prop {null | Date} due - The date when the task is due. Can be null if no due date is set.
 * @prop {'high' | 'medium' | 'low'} urgency - The urgency level of the task, which can be 'high', 'medium', or 'low'.
 */

// Example usage of the Tasks typedef
const task1 = {
  id: "1",
  title: "Buy groceries",
  completed: false,
  created: new Date("2023-07-19"),
  due: new Date("2023-07-25"),
  urgency: "medium",
};

const task2 = {
  id: "2",
  title: "Pay bills",
  completed: false,
  created: new Date("2023-07-19"),
  due: null, // No due date set for this task
  urgency: "high",
};

// Function that takes a Tasks object as an argument
function displayTask(task) {
  console.log(`Task: ${task.title}`);
  console.log(`Status: ${task.completed ? "Completed" : "Incomplete"}`);
  console.log(`Created: ${task.created.toDateString()}`);
  if (task.due !== null) {
    console.log(`Due: ${task.due.toDateString()}`);
  } else {
    console.log("No due date set.");
  }
  console.log(`Urgency: ${task.urgency}`);
}

// Output information about the tasks
console.log("Task 1:");
displayTask(task1);
console.log("Task 2:");
displayTask(task2);
