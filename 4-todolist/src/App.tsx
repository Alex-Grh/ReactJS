import React, { useState } from 'react';
import './App.css';
import TodoList, { TaskType } from './TodoList';

export type FilterValuesType = "all" | "active" | "completed"

function App() {
   //Bll:   
   const title: string = 'What to lern'

   const [tasks, setTasks] = useState<TaskType[]>(
      [
         { id: 1, title: "HTML&CSS", isDone: true },
         { id: 2, title: "JS", isDone: true },
         { id: 3, title: "React", isDone: false },
         { id: 4, title: "Redux", isDone: false },
      ]
   )
   const [filter, setFilter] = useState<FilterValuesType>("all")

   const  changeFilter = (filter:FilterValuesType) => {
      setFilter(filter)
   }
   //UI:

   const removeTask = (taskId: number) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId)
      setTasks(updatedTasks)
   }

   const getFilteredTasks = (tasks: Array<TaskType>, filter: FilterValuesType): Array<TaskType> => {
      //    switch (filter) {
      //       case "active":
      //          return tasks.filter(t => !t.isDone)
      //       case "completed":
      //          return tasks.filter(t => t.isDone)
      //       default:
      //          return tasks
      //    }
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
            changeFilter ={changeFilter}
         />
      </div>
   );
}

export default App;
