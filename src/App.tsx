import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";

import iTask from './interfaces/Task'
import { useState } from 'react';

export default function App() {

  const [listTasks, setListTasks] = useState<iTask[]>([])

  function onNewTask(task: iTask) {
    setListTasks([...listTasks, task]);
  }

  function onSetlistTasks(id: number, status: boolean) {
      const newListTasks = listTasks.map(task => (task.id === id) ? {...task, done: status} : task );
      setListTasks(newListTasks);
  }

  function onRemoveListTasks(id: number) {
    const newListTasks = listTasks.filter(task => task.id !== id);
    setListTasks(newListTasks);
  }

  return (
    <div>
      <Header />
      <NewTask onNewTask={onNewTask} />
      <Tasks listTasks={listTasks} onSetlistTasks={onSetlistTasks} onRemoveListTasks={onRemoveListTasks} />
    </div>
  )
}


