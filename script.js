/* Assignment 03: Starting a Todo List App
 *
 * You are going to build the brains of a simple Todo List application
 * in JavaScript. You don't have to worry about the look of the app for now.
 * We will make it look awesome in Assignment 04.
 *
 * For now, we'll focus on giving the application the following features:
 * 1. Add a new todo item
 * 2. Delete a todo item
 * 3. Mark a todo item as completed
 * 4. Delete a todo item
 * 5. Clear all completed todos
 *
 * The following code is the starting point for this assignment.
 *
 * You will have to write the code to initialise the todoItems array and
 * for the functions below.
 *
 * 1. addToDoItem(text)
 * 2. removeToDoItem(todoId)
 * 3. markToDoItemAsCompleted(todoId)
 * 4. deleteToDoItem(todoId)
 * 5. clearCompletedTasks()
 *
 * YOU MUST NOT CHANGE ANY OF THE FUNCTION NAMES OR THE AUTOMATED TESTS WILL FAIL
 *
 * As you write each function, press on the "Run Tests" button in the browser
 * to run the automated tests and check your work.
 *
 * You can also add your own tests and debug statements at the bottom of this file.
 *
 */


// Data storage - Initialize the array of To Do items
//
// NOTE:
//
// - You must use the following object literal structure when creating new todo items
// - The ID (id) of each todo item must be unique (you can use the length of the array as the ID or generate a random number)
//
// {
//   id: 0,
//   text: "This is a todo item",
//   completed: false,
// }

// Initialise an empty array with the variable name todoItems

let todoItems = [];
let counter = 0;

addToDoItem("Make your bed");
removeToDoItem(0);

// Function to add a todo to the list
// It should accept a string as a parameter (text of the todo item)
// and it should add a new todo item to the todoItems array
// The todo item should have the structure shown above
// It's really important that you have a unique ID for each todo item that you push onto the array
// the function does not need to return anything
function addToDoItem(text) {
//ERROR HANDLING
  if (!text){
    console.error("Text cannot be empty.");
    return;
  }
//duplicate IDs
  if (todoItems.some(item => item.id === counter)){
    console.error("No duplicate IDs allowed. Please regenerate.");
    return;
  }
  // Implement the logic to add a task here
  let todoItem ={
    id : counter,
    text : text,
    completed : false,
  };
  todoItems.push(todoItem);
  counter = counter + 1;
}
  //console.log("NOT YET IMPLEMENTED"); // Remove this line when you start working on the function


// Function to remove a todo to the list
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything
function removeToDoItem(todoId) {
//check that todoId is a valid number
if (typeof todoId !== 'number' || isNaN(todoId)) {
  console.error("Invalid input type.");
  return;
}
//check that todoId exists before attempting to remove?
  let indexToRemove = todoItems.findIndex(item => item.id === todoId);
  if (indexToRemove === -1){
    console.error(`Todo item with ID ${todoId} not found.`);
    return;
  }

  // Implement the logic to add a task here
  for (let index = 0; index < todoItems.length; index++){
    if (todoItems[index].id === todoId){
      todoItems.splice(index, 1);
      break;
    }
  }
}
  //console.log("NOT YET IMPLEMENTED"); // Remove this line when you start working on the function

// Function to mark a task as completed
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, set its completed property to true
// the function does not need to return anything
function markToDoItemAsCompleted(todoId) {

//check that todoId is a valid number
if (typeof todoId !== 'number' || isNaN(todoId)) {
  console.error("Invalid input type.");
  return;
}
  try{
  /* check todo exists */
  let todoItem = todoItems.find(item => item.id === todoId);

    console.log(todoItem)

  if (!todoItem){
    console.error(`Todo item with ID ${todoId} not found.`);
    return;
  } //For some reason I cannot get this to work as it always returns the error message saying the item DNE but it does???? any suggestions would be greatly appreciated haha

  // Implement the logic to mark a task as completed here
  for (let index = 0; index < todoItems.length; index++){
    if (todoItems[index].id === todoId){
      todoItems[index].completed = true;
      break;
    }
  }
} catch (error) {
  console.error('Error found while marking todo item as completed');
}
}

// Adding a todo item into the array 
addToDoItem("Hello world");
// Remove the first one
markToDoItemAsCompleted(1);
// Display Todo Array
console.log("Todo Items", todoItems);


  //console.log("NOT YET IMPLEMENTED"); // Remove this line when you start working on the function

// Function to delete a task from the array
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything, though you can return
// true or false depending on whether the item was successfully deleted
function deleteToDoItem(todoId) {
//check that todoId is a valid number
if (typeof todoId !== 'number' || isNaN(todoId)) {
  console.error("Invalid input type.");
  return;
}
//check that todoId exists before attempting to delete?
let indexToRemove = todoItems.findIndex(item => item.id === todoId);
if (indexToRemove === -1){
  console.error(`Todo item with ID ${todoId} not found.`);
  return;
}
  // Implement the logic to remove a task here
  for (let index = 0; index < todoItems.length; index++){
    if (todoItems[index].id === todoId){
      todoItems.splice(index, 1);
      break;
    }
  }
}
  //console.log("NOT YET IMPLEMENTED"); // Remove this line when you start working on the function


// Function to clear all completed tasks
// Loop through the array of todos, and when you find a todo item that is marked
// as completed, remove it completely from the array
function clearCompletedTasks() {
//check that todoItems is array before clearing?
if (!Array.isArray(todoItems)) {
  console.error("Invalid. Please ensure todoItems is an array.");
  return;
}
  // Implement the logic to clear completed tasks here
  for (let index = 0; index < todoItems.length; index--){ //iterating through the array in reverse order to avoid skipping elements when removing
    if (todoItems[index].completed === true){
      todoItems.splice(index, 1);
    }
  }
}
  //console.log("NOT YET IMPLEMENTED"); // Remove this line when you start working on the function

// You can write your own tests here if you would like to test
// your code before using the automated tests
// For example, you could run:
//  addToDoItem("Test ToDo"); // This should add a new todo item to the array
//  console.log(todoItems); // This should show the todo item you added
//  removeToDoItem(0); // This should remove the todo item with ID 0 from the array
//  markToDoItemAsCompleted(0); // This should mark the todo item with ID 0 as completed
