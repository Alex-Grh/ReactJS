import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { FilterValuesType } from './App';

type TodoListPropsType = {
   title: string
   tasks: TaskType[]
   removeTask: (taskId: string) => void
   changeFilter: (filter: FilterValuesType) => void
   addTask: (title: string) => void
}

export type TaskType = {
   id: string
   title: string
   isDone: boolean
}

const TodoList: FC<TodoListPropsType> = ({ tasks, title, removeTask, changeFilter, addTask }) => {

   const tasksJSX: Array<JSX.Element> = tasks.map(task => {
      const removeTask1 = () => {
         removeTask(task.id)
      }
      return (
         <li key={task.id}>
            <input type='checkbox' checked={task.isDone} />
            <span>{task.title}</span>
            <button onClick={removeTask1}>X</button>
         </li>
      )
   })

   let [title1, setTitle] = useState('')
   const addTask1 = () => {
      addTask(title1)
      setTitle('')
   }
   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
   }
   const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enteer') addTask1()
   }

   const onAllClickHandler = () => {
      changeFilter('all')
   }
   const onActiveClickHandler = () => {
      changeFilter('active')
   }
   const onCompletedeClickHandler = () => {
      changeFilter('completed')
   }

   return (
      <div>
         <div className='todolist'>
            <h3>{title}</h3>
            <div>
               <input
                  value={title1}
                  onChange={onChangeHandler}
                  onKeyPress={onKeyPressHandler}
               />
               <button onClick={addTask1}>+</button>
            </div>
            <ul>
               {tasksJSX}
            </ul>

            <div>
               <button
                  onClick={onAllClickHandler}
               >All</button>
               <button
                  onClick={onActiveClickHandler}
               >Active</button>
               <button
                  onClick={onCompletedeClickHandler}
               >Completed</button>
            </div>
         </div>
      </div>

   );
};

export default TodoList;
