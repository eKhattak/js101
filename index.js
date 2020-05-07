/*
.todoText   // Todo Text Input
.addTodo   //Add Todo Button
#iscomplete   // Is Complete CHeckBox
.clear       // Clear Button
.bg-danger    // Warning Messages
.list-items // Todo List
*/

const todoText = document.querySelector(".todoText");
const addTodo = document.querySelector(".addTodo");
const deleteAll = document.querySelector(".clear");
const listItems = document.querySelector(".list-items");

listItems.innerHTML = "";

deleteAll.addEventListener("click", (e) => {
  listItems.innerHTML = "";
});

addTodo.addEventListener("click", (e) => {
  // List Item
  const liItem = document.createElement("li");
  liItem.className = "card py-2 px-4 mb-3 bg-success";
  liItem.style.animation = "fadeIn .5s linear";
  // Paragraph Tag
  const pItem = document.createElement("p");
  pItem.className = "d-flex justify-content-between align-items-center";
  // Paragraph Value
  const pValue = document.createTextNode(todoText.value);
  pItem.appendChild(pValue);
  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-secondary";
  // Delete Value
  const deleteValue = document.createTextNode("Delete");
  deleteBtn.appendChild(deleteValue);

  pItem.appendChild(deleteBtn);

  liItem.appendChild(pItem);

  listItems.appendChild(liItem);

  todoText.value = "";
});

// DOM
