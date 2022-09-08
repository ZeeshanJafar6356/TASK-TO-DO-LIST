const addForm = document.querySelector('.add');
const list = document.querySelector('.todo');
const items = document.querySelectorAll('.todo');

//Template string used to add the new todo to the list
const add = (todo) => {
  const html = `
    <li class="list-group-item bg-dark text-light d-flex justify-content-between align-items-center">
      ${todo}
      <i class="far fa-trash-alt delete"></i>
    </li>`;

  //takes the template string from above code and add it to the html list
  list.innerHTML += html;
};

//Submit will add the new todo
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  //todo length limiter to avoid adding empty input and clear the input field using reset method
  if (todo.length) {
    add(todo);
    addForm.reset();
  }
});

//Removing any todo using event listener event delegation
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

//if we want to put line through todo items then use this code//
//Just putting a text line through on todo list which is completed

items.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.target.style.textDecoration = 'line-through';
  });
});
