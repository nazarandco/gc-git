import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains('list-item__checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskId = e.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text, createDate } = tasksList.find((task) => task.id === taskId);
  const done = e.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  }; // = 1. Prepare data
  updateTask(taskId, updatedTask) // = 2. Update data in db
    .then(() => getTasksList()) // = 3. Read new data from server
    .then((newTasksList) => {
      setItem('tasksList', newTasksList); // = 4. Save new data to front-end storage
      renderTasks(); // = 5. Update UI based on new data
    });
};

export const onDeleteClick = (e) => {
    const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');

    if (!isDeleteBtn) {
      return;
    }

  const taskId2 = e.target.dataset.id;
  const tasksList = getItem('tasksList');
  const taskToDelete = tasksList.find((task) => task.id === taskId2);

  deleteTask(taskId2, taskToDelete)
    .then(() => getTasksList()) // = 3. Read new data from server
    .then((newTasksList) => {
      setItem('tasksList', newTasksList); // = 4. Save new data to front-end storage
      renderTasks(); // = 5. Update UI based on new data
    });
};

export const onListClick = (e) => {
  if (e.target.classList.contains('list-item__delete-btn')) {
    onDeleteClick(e);
  } else if (e.target.classList.contains('list-item__checkbox')) {
    onToggleTask(e);  
  }
};

// 1. Prepare data
// 2. Update data in db
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
