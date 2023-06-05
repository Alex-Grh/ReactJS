import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { FilterValuesType } from './App';

export type TodoListPropsType = {
   todoListId: string
   title: string
   tasks: TaskType[]
   filter: FilterValuesType

   addTask: (title: string, todoListId: string) => void
   removeTask: (taskId: string, todoListId: string) => void
   changeTaskStatus: (taskId: string, isDone: boolean, todoListId: string) => void

   removeTodoList: (todoListId: string) => void
   changeTodoListFilter: (filter: FilterValuesType, todoListId: string) => void
}

export type TaskType = {
   id: string
   title: string
   isDone: boolean
}

const TodoList: FC<TodoListPropsType> = ({ tasks, title, removeTask, changeTodoListFilter, addTask, changeTaskStatus, filter, todoListId }) => {

   const tasksJSX: Array<JSX.Element> = tasks.map(task => {
      const removeTask1 = () => {
         removeTask(task.id, todoListId )
      }

      const onChangeHandler = ((e: ChangeEvent<HTMLInputElement>) => {
         let newStatus = e.currentTarget.checked
         changeTaskStatus(task.id, newStatus, todoListId )
      })

      return (
         <li key={task.id} className={task.isDone ? 'is-done' : ''}>
            <input type='checkbox' checked={task.isDone} onChange={onChangeHandler} />
            <span>{task.title}</span>
            <button onClick={removeTask1}>X</button>
         </li>
      )
   })

   let [title1, setTitle] = useState('')
   let [error, setError] = useState<string | null>(null)

   const addTask1 = () => {
      if (title1.trim() !== "") {
         addTask(title1.trim(), todoListId)
         setTitle('')
      } else {
         setError('Title is required')
      }
   }
   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
   }
   const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      setError(null)
      if (e.key === 'Enteer') addTask1()
   }

   const onAllClickHandler = () => {
      changeTodoListFilter('all', todoListId)
   }
   const onActiveClickHandler = () => {
      changeTodoListFilter('active', todoListId)
   }
   const onCompletedeClickHandler = () => {
      changeTodoListFilter('completed', todoListId)
   }

   return (
      <div>
         <div className='todolist'>
            <h3>{title}</h3>
            <div>
               <input value={title1} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}
                  className={error ? 'error' : ''}
               />
               {error && <div className={'error-message'}>{error}</div>}
               <button onClick={addTask1}>+</button>
            </div>
            <ul>
               {tasksJSX}
            </ul>

            <div>
               <button className={filter === 'all' ? 'active-filter' : ''} onClick={onAllClickHandler}>All</button>
               <button className={filter === 'active' ? 'active-filter' : ''} onClick={onActiveClickHandler}>Active</button>
               <button className={filter === 'completed' ? 'active-filter' : ''} onClick={onCompletedeClickHandler}>Completed</button>
            </div>
         </div>
      </div>

   );
};

export default TodoList;
