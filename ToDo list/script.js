const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.onclick = () => {
  let task = taskInput.value.trim();
  if (!task) return;
  
  let li = document.createElement("li");
  li.textContent = task;

  li.onclick = () => li.classList.toggle("completed");

  let delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.className = "delete";
  delBtn.onclick = (e) => {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
};
