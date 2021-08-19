import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import TasksList from './TasksList';
import CreateTaskInput from './CreateTaskInput.jsx';
import * as tasksAction from '../tasks.actions';
import { sortedTasksListSelector } from '../tasks.selectors';

const TodoList = ({
  getTasksList,
  updateTask,
  deleteTask,
  createTask,
  tasks,
}) => {
  useEffect(() => getTasksList(), []);

  return (
    <>
      <h1 className='title'>Todo List</h1>
      <main className='todo-list'>
        <CreateTaskInput handleTaskCreate={createTask} />
        <TasksList
          tasks={tasks}
          handleTaskStatusChange={updateTask}
          handleTaskDelete={deleteTask}
        />
      </main>
    </>
  );
};

TodoList.propTypes = {
  getTaskList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.updateTask,
  deleteTask: PropTypes.func.deleteTask,
  createTask: PropTypes.func.createTask,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
};

const mapDispatch = {
  getTasksList: tasksAction.getTasksList,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
  createTask: tasksAction.createTask,
};

const mapState = (state) => {
  return {
    tasks: sortedTasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TodoList);
