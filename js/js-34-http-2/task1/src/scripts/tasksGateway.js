const baseUrl = 'https://60d49bf961160900173cbb6b.mockapi.io/api/v1/tasks';

const mapTask = (tasks) =>
  tasks.map(({ id, ...rest }) => ({ ...rest, id }));

export const getTasksList = () => {
  return fetch(baseUrl)
    .then((responce) => responce.json())
    .then((tasks) => mapTask(tasks));
};

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updatedTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTaskData),
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};

