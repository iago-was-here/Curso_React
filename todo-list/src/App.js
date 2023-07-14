import { React, useState } from 'react';

import NewTask from './components/newtask';
import TaskList from './components/tasklist';

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const onToggle = (task) => {
    setTaskList(
      taskList.map((obj) => (obj.id === task.id ? { ...obj, checked: !task.checked } : obj))
    );
  };

  const onRemove = (task) => {
    setTaskList(
      taskList.filter((obj) => obj.id !== task.id)
    );
  }

  const onNewTask = (task) => {
    setTaskList([
      ...taskList,
      { id: new Date().getTime(), description: task, checked: false }
    ]);
  };

  return (
    <section id='app' className='container'>
      <header>
        <h1 className='title'>Todo-List</h1>
      </header>
      <section className='main'>
        <NewTask onNewTask={onNewTask} />
        <TaskList taskList={taskList} onToggle={onToggle} onRemove={onRemove} />
      </section>
    </section>
  );
}

export default App;
