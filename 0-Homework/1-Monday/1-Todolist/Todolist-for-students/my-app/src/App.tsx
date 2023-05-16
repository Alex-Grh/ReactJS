import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskType, Todolist } from './Todolist';
import { v1 } from 'uuid';


export type FilterValuesType = "all" | "completed" | "active";

function App() {

   let [tasks, setTasks] = useState<TaskType[]>([
      { id: v1(), title: "CSS&HTML", isDone: true },
      { id: v1(), title: "JS", isDone: false },
      { id: v1(), title: "React", isDone: true },
      { id: v1(), title: "Redux", isDone: false },
   ]);

   let [filter, setFilter] = useState<FilterValuesType>('all')

   function removeTask(id: string) {
      let filteredTasks = tasks.filter(t => t.id !== id)
      setTasks(filteredTasks);
   }

   function changeFilter(value: FilterValuesType) {
      setFilter(value);
   }

   let tasksForTodolist = tasks;
   if (filter === "completed") {
      tasksForTodolist = tasks.filter(t => t.isDone === true);
   }
   if (filter === "active") {
      tasksForTodolist = tasks.filter(t => t.isDone === false);
   }



   return (
      <div className="App">
         <Todolist title="What to learn"
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter} />

      </div>
   );
}



export default App;
