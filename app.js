const addForm = document.querySelector(".add");
const todosList = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = ` 
        <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span> ${todo} </span>
        <i class="fa-solid fa-trash delete"></i>
      </li>
`;
  todosList.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

todosList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// keyup event
filterTodos = (data) => {
  Array.from(todosList.children)
    .filter((todo) => !todo.textContent.includes(data))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(todosList.children)
    .filter((todo) => todo.textContent.includes(data))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const data = search.value.trim();
  // console.log(data);
  filterTodos(data);
});
