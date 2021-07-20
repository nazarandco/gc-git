import React from 'react';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';
import {
  createTask,
  fetchTasksList,
  updateTask,
  deleteTask,
} from './tasksGateway.js';

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then((tasksList) =>
      this.setState({
        tasks: tasksList,
      })
    );
  };

  onCreate = (text) => {
    // 1. Create task object
    // 2. Post object to server
    // 3. Fetch list from server

    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = (id) => {
    // 1. Find task in state by id
    // 2. Create updated task
    // 3. Update task on server
    // 4. Fetch updated task list
    const { done, text } = this.state.tasks.find((task) => task.id === id);
    const updatedText = {
      text,
      done: !done,
    };

    updateTask(id, updatedText).then(() => this.fetchTasks());
  };

  handleTaskDelete = (id) => {
    // 1. Filter tasks (delete deleted)
    // 2. Update state
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <main className='todo-list'>
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className='list'>
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
