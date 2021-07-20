import React from 'react';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';

class TasksList extends React.Component {
  state = {
    tasks: [
      {
        text: 'VW',
        done: false,
        id: '1',
      },
      {
        text: 'Porsche',
        done: false,
        id: '2',
      },
      {
        text: 'Toyota',
        done: true,
        id: '3',
      },
    ],
  };

  render() {
    return (
      <main className='todo-list'>
        <CreateTaskInput />
        <ul className='list'>
          {this.state.tasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
