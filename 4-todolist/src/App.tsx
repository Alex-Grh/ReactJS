import React from 'react';
import './App.css';
import TodoList, { TaskType } from './TodoList';

function App() {
   //Bll:   
   const title:string ='What to lern'  
   let tasks: TaskType[] = [
      { id: 1, title: "HTML&CSS", isDone: true },
      { id: 2, title: "JS", isDone: true },
      { id: 3, title: "React", isDone: false },
      { id: 4, title: "Redux", isDone: false },
   ]
   //UI:

const removeTask = (taskId:number) => {
   tasks = tasks.filter((task)=>{
return task.id !== taskId 
   })
   console.log(tasks)
}

   return (
      <div className="App">
         <TodoList 
         tasks={tasks} 
         title={title}
         removeTask={removeTask}
         />
      </div>
   );
}

export default App;
