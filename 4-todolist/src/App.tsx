import React, { useState } from 'react';
import './App.css';
import TodoList, { TaskType } from './TodoList';
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "active" | "completed"

function App() {
   //Bll:   
   const title: string = 'What to lern'

   const [tasks, setTasks] = useState<TaskType[]>(
      [
         { id: v1(), title: "HTML&CSS", isDone: true },
         { id: v1(), title: "JS", isDone: true },
         { id: v1(), title: "React", isDone: false },
         { id: v1(), title: "Redux", isDone: false },
      ]
   )
   const [filter, setFilter] = useState<FilterValuesType>("all")

   const changeFilter = (filter: FilterValuesType) => {
      setFilter(filter)
   }
   //UI:

   const removeTask = (taskId: string) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId)
      setTasks(updatedTasks)
   }

   function addTask(title: string) {
      let newTask = { id: v1(), title: title, isDone: false }
      let newTasks = [newTask, ...tasks]
      setTasks(newTasks)
   }

   const getFilteredTasks = (tasks: Array<TaskType>, filter: FilterValuesType): Array<TaskType> => {
        
      return filter === "active"
         ? tasks.filter(t => !t.isDone)
         : filter === "completed"
            ? tasks.filter(t => t.isDone)
            : tasks;

   }
   const filteredTasks: Array<TaskType> = getFilteredTasks(tasks, filter)

   return (
      <div className="App">
         <TodoList
            tasks={filteredTasks}
            title={title}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
         />
      </div>
   );
}

export default App;
