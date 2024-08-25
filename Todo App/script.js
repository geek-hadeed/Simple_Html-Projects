const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
      <div class="card">
        <h2 class="task-title">${taskText}</h2>
        <p class="task-description"></p>
        <div class="actions">
          <button class="btn btn-edit"><i class="fas fa-pencil-alt"></i></button>
          <button class="btn btn-delete"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

taskList.addEventListener('click', handleTaskClick);

function handleTaskClick(event) {
  if (event.target.classList.contains('btn-edit')) {
    const taskItem = event.target.parentNode.parentNode.parentNode;
    const taskTitle = taskItem.querySelector('.task-title');
    const taskDescription = taskItem.querySelector('.task-description');
    taskTitle.contentEditable = 'true';
    taskDescription.contentEditable = 'true';
  } else if (event.target.classList.contains('btn-delete')) {
    const taskItem = event.target.parentNode.parentNode.parentNode;
    taskItem.remove();
  }
}