import React, { useState } from 'react';
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

   function addTask(title: string) {
      let task = {
         id: v1(),
         title: title,
         isDone: false
      };
      let newTasks = [task, ...tasks];
      setTasks(newTasks);
   }

   function changeStatus(taskId: string, isDone: boolean) {
      let task = tasks.find(t => t.id === taskId)
      if (task) {
         task.isDone = isDone;
      }
      setTasks([...tasks]);
   }

   let tasksForTodolist = tasks;
   if (filter === "active") {
      tasksForTodolist = tasks.filter(t => t.isDone === false);
   }
   if (filter === "completed") {
      tasksForTodolist = tasks.filter(t => t.isDone === true);
   }

   function changeFilter(value: FilterValuesType) {
      setFilter(value);
   }

   return (
      <div className="App">
         <Todolist title="What to learn"
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            filter={filter}
         />

      </div>
   );
}

export default App;
