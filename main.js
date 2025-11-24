const todos = [
  "課題",
  "掃除",
  "買い物"
];

const todoList = document.getElementById("todo-list");

todos.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  todoList.appendChild(li);
});

const kudamonos = [
    "りんご",
    "バナナ",
    "みかん",
    "ぶどう"
];

const kudamonoList = document.getElementById("kudamono-list");

kudamonoList.innerHTML = kudamonos.map((item) => `<li>${item}</li>`).join("");