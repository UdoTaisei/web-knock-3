// 配列（例：TODOリスト）
const todos = [
  "レポートを書く",
  "部屋を片付ける",
  "買い物に行く",
  "ゲームで遊ぶ"
];

// HTMLの<ul>要素を取得（id="todo-list"）
const todoList = document.getElementById("todo-list");

// 配列をforEachで回して<li>を動的に追加
todos.forEach((item) => {
  // <li>要素を作る
  const li = document.createElement("li");

  // テキストを入れる
  li.textContent = item;

  // <ul>の中に<li>を追加
  todoList.appendChild(li);
});
