import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';
import { v1 } from 'uuid';
import { AddItemForm } from './AddItemForm';


export type FilterValuesType = "all" | "completed" | "active";

type TodolistType = {
   id: string
   title: string
   filter: FilterValuesType
}


type TasksStateType = {
   [key: string]: Array<TaskType>
}

function App() {

   function removeTask(id: string, todolistId: string) {
      let tasks = tasksObj[todolistId];
      let filteredTasks = tasks.filter(t => t.id !== id)
      tasksObj[todolistId] = filteredTasks;
      setTasks({ ...tasksObj });
   }

   function addTask(title: string, todolistId: string) {
      let task = { id: v1(), title: title, isDone: false };
      let tasks = tasksObj[todolistId];
      let newTasks = [task, ...tasks];
      tasksObj[todolistId] = newTasks
      setTasks({ ...tasksObj });
   }

   function changeStatus(id: string, isDone: boolean, todolistId: string) {
      //достаем нужный массив по todolistId
      let todolistTasks = tasksObj[todolistId];
      //найдем нужную таску
      let task = todolistTasks.find(t => t.id === id)
      //изменим таску, если она нашлась
      if (task) {
         task.isDone = isDone;
         // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
         setTasks({ ...tasksObj });
      }
   }
   function changeTaskTitle(id: string, newTitle: string, todolistId: string) {
     //достаем нужный массив по todolistId
      let todolistTasks = tasksObj[todolistId];
       //найдем нужную таску
      let task = todolistTasks.find(t => t.id === id)
       //изменим таску, если она нашлась
      if (task) {
         task.title = newTitle;
         // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
         setTasks({ ...tasksObj });
      }
   }

   function changeFilter(value: FilterValuesType, todolistId: string) {
      let todolist = todolists.find(tl => tl.id === todolistId);
      if (todolist) {
         todolist.filter = value;
         setTodolist([...todolists]);
      }
   }

   let todolistId1 = v1();
   let todolistId2 = v1();

   let [todolists, setTodolist] = useState<Array<TodolistType>>([
      { id: todolistId1, title: "What to learn", filter: "all" },
      { id: todolistId2, title: "What to buy", filter: "all" },
   ]);

   let removeTodolist = (todolistId: string) => {
      let filteredTodolist = todolists.filter(tl => tl.id !== todolistId)
      setTodolist(filteredTodolist);
      delete tasksObj[todolistId];
      setTasks({ ...tasksObj });
   }

   function changeTodolistTitle(id: string, newTitle: string) {
    const todolist =  todolists.find(tl => tl.id === id);
    if (todolist) {
      todolist.title = newTitle;
      setTodolist([...todolists])
    }
   }

   let [tasksObj, setTasks] = useState<TasksStateType>({
      [todolistId1]: [
         { id: v1(), title: "CSS&HTML", isDone: true },
         { id: v1(), title: "JS", isDone: false },
         { id: v1(), title: "React", isDone: true },
         { id: v1(), title: "Redux", isDone: false },
      ],
      [todolistId2]: [
         { id: v1(), title: "Book", isDone: false },
         { id: v1(), title: "Milk", isDone: true },

      ]
   });

   function addTodolist (title:string) {
      // (title: string) => { alert(title) }
      let todolist: TodolistType = {
         id: v1(),
         filter: 'all',
         title: title
      }
      setTodolist([todolist, ...todolists])
      setTasks({
         ...tasksObj,
         [todolist.id]: []
      })
   }

   return (
      <div className="App">
         <AddItemForm addItem={addTodolist} />
         {
            todolists.map((tl) => {
               let tasksForTodolist = tasksObj[tl.id];
               if (tl.filter === "active") {
                  tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
               }
               if (tl.filter === "completed") {
                  tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
               }

               return <Todolist
                  key={tl.id}
                  id={tl.id}
                  title={tl.title}
                  tasks={tasksForTodolist}
                  removeTask={removeTask}
                  changeFilter={changeFilter}
                  addTask={addTask}
                  changeTaskStatus={changeStatus}
                  changeTaskTitle={changeTaskTitle}
                  filter={tl.filter}
                  removeTodolist={removeTodolist}
                  changeTodolistTitle = {changeTodolistTitle}
               />
            })
         }

      </div>
   );
}

export default App;
