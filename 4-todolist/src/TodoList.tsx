import React, { FC } from 'react';

type TodoListPropsType = {
   title: string
   tasks: TaskType[]
   removeTask: (taskId: number) => void
}

export type TaskType = {
   id: number
   title: string
   isDone: boolean
}

const TodoList: FC<TodoListPropsType> = ({ tasks, title, removeTask }) => {
   const tasksJSX: Array<JSX.Element> = tasks.map((task) => {
      return (
         <li key={task.id}>
            <input type='checkbox' checked={task.isDone} />
            <span>{task.title}</span>
            <button onClick={() => removeTask(task.id)}>X</button>
         </li>
      )
   })
   return (
      <div>
         <div className='todolist'>
            <h3>{title}</h3>
            <div>
               <input />
               <button>+</button>
            </div>
            <ul>
               {tasksJSX}
            </ul>

            <div>
               <button>All</button>
               <button>Active</button>
               <button>Completed</button>
            </div>
         </div>
      </div>

   );
};

export default TodoList;