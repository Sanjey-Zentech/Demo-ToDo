const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

function addTodo() {
  const text = input.value.trim();
  if (text === '') return;
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.className = "text";
  span.textContent = text;
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'delete-btn';
  delBtn.onclick = () => list.removeChild(li);
  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);
  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', addTodo);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTodo();
});