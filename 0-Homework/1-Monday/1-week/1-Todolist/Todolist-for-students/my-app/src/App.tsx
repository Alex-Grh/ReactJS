import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskType, Todolist } from './Todolist';

function App() {
   let tasks1: TaskType[] = [
      { id: 1, title: "CSS&HTML", isDone: true },
      { id: 2, title: "JS", isDone: false },
      { id: 3, title: "React", isDone: true },
   ]
   let tasks2: TaskType[] = [
      { id: 1, title: "Terminator1", isDone: true },
      { id: 2, title: "XXX", isDone: true },
      { id: 3, title: "Jentlments of fortune", isDone: true },
   ]


   return (
      <div className="App">
         <Todolist title="What to learn" tasks={tasks1} />
         <Todolist title="Movies" tasks={tasks2} />

      </div>
   );
}



export default App;
