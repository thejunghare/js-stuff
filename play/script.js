const input = document.getElementById('task-input');
const form  = document.getElementById('task-form');
const list  = document.getElementById('task-list');

// Save and render on submit
form.addEventListener('submit', e => {
  e.preventDefault();
  const task = input.value.trim();
  if (!task) return;

  // keep an array of tasks in localStorage
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  addTaskToDOM(task);
  input.value = '';
});

// helper to create a <p> tag and append it
function addTaskToDOM(text) {
  const p = document.createElement('p');
  p.textContent = text;
  list.appendChild(p);
}

// read and render all tasks on page load
const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
savedTasks.forEach(addTaskToDOM);
