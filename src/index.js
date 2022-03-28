import "./styles.css";
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deletecheck);
function addTodo(event) {
  event.preventDefault(); // Prevent form from submiting
  // Create Todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Check mark button
  const completedbtn = document.createElement("button");
  completedbtn.innerHTML = "Done";
  completedbtn.classList.add("completed-btn");
  todoDiv.appendChild(completedbtn);
  // Trash button
  const trashbtn = document.createElement("button");
  trashbtn.innerHTML = "Del";
  trashbtn.classList.add("trash-btn");
  todoDiv.appendChild(trashbtn);
  // APPEND TO LIST
  todoList.appendChild(todoDiv);
  //clear todoInput value
  todoInput.value = "";
}
function deletecheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
  // checkMark
  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;

    todo.classList.toggle("completed");
  }
}
