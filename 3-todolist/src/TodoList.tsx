import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { FilterValuesType } from './App';
import { AddItemForm } from './AddItemForm';
import { EditableSpan } from './EditableSpan';

export type TodoListPropsType = {
   todoListId: string
   title: string
   tasks: TaskType[]
   filter: FilterValuesType

   addTask: (title: string, todoListId: string) => void
   removeTask: (taskId: string, todoListId: string) => void
   changeTaskStatus: (taskId: string, isDone: boolean, todoListId: string) => void
   changeTaskTitle: (taskId: string, title: string, todoListId: string) => void
   removeTodoList: (todoListId: string) => void
   changeTodoListFilter: (filter: FilterValuesType, todoListId: string) => void
   changeTodoListTitle: (title: string, todoListId: string) => void

}

export type TaskType = {
   id: string
   title: string
   isDone: boolean
}

export function TodoList(props: TodoListPropsType) {
   // const TodoList: FC<TodoListPropsType> = ({ tasks, title, removeTask, changeTodoListFilter, addTask, changeTaskStatus, filter, todoListId, removeTodoList }) => {

   const onAllClickHandler = () => { props.changeTodoListFilter('all', props.todoListId) }
   const onActiveClickHandler = () => { props.changeTodoListFilter('active', props.todoListId) }
   const onCompletedeClickHandler = () => { props.changeTodoListFilter('completed', props.todoListId) }
   const removeTodoList = () => props.removeTodoList(props.todoListId);
const changeTodoListTitle = (newTitle: string) => props.changeTodoListTitle(newTitle, props.todoListId)

   const tasksJSX: Array<JSX.Element> = props.tasks.map(task => {
      const onClickHandler = () => {
         props.removeTask(task.id, props.todoListId)
      }

      const onChangeHandler = ((e: ChangeEvent<HTMLInputElement>) => {
         let newStatus = e.currentTarget.checked
         props.changeTaskStatus(task.id, newStatus, props.todoListId)
      })

      const changeTaskTitle = (newTitle: string) => props.changeTaskTitle(task.id, newTitle, props.todoListId)

      return (
         <li key={task.id} className={task.isDone ? 'is-done' : ''}>
            <input type='checkbox' checked={task.isDone} onChange={onChangeHandler} />
            <EditableSpan title={task.title} changTitle={changeTaskTitle} />
            <button onClick={onClickHandler}>X</button>
         </li>
      )
   })


   const addNewTask = (title: string) => props.addTask(title, props.todoListId)


   return (
      <div>
         <div className='todolist'>
            <h3>
               <EditableSpan title={props.title} changTitle={changeTodoListTitle}/>
               <button onClick={removeTodoList}>X</button> </h3>
            <AddItemForm addItem={addNewTask} />
            <ul>
               {tasksJSX}
            </ul>

            <div>
               <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={onAllClickHandler}>All</button>
               <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={onActiveClickHandler}>Active</button>
               <button className={props.filter === 'completed' ? 'active-filter' : ''} onClick={onCompletedeClickHandler}>Completed</button>
            </div>
         </div>
      </div>

   );
};


