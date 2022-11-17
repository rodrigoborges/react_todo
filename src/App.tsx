import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";

import iTask from './interfaces/Task'
import { useState } from 'react';
import Task from "./components/Task";

export default function App() {

  const [listTasks, setListTasks] = useState<iTask[]>([])

  function onNewTask(task: iTask) {
    setListTasks([...listTasks, task]);
  }

  function onSetlistTasks(id: number, status: boolean) {
      console.log(id, status);
      const newListTasks = listTasks.map(task => (task.id === id) ? {...task, done: status} : task );
      setListTasks(newListTasks);
  }

  return (
    <div>
      <Header />
      <NewTask onNewTask={onNewTask} />
      <Tasks listTasks={listTasks} onSetlistTasks={onSetlistTasks} />
    </div>
  )
}


