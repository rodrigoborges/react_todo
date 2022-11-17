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

  return (
    <div>
      <Header />
      <NewTask onNewTask={onNewTask} />
      <Tasks listTasks={listTasks} />
    </div>
  )
}


