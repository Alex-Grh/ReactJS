import React from "react";
import { FilterValuesType } from "./App";

type PropsType = {
   title: string
   tasks: TaskType[]
   removeTask: (id: number) => void
   changeFilter: (value: FilterValuesType) => void
}
export type TaskType = {
   id: number
   title: string
   isDone: boolean

}

export function Todolist(props: PropsType) {
   return (
      <div>
         <h3>{props.title}</h3>
         <div>
            <input />
            <button>+</button>
         </div>
         <ul>
            {
               props.tasks.map(t => <li><input type="checkbox" checked={t.isDone} />
                  <span>{t.title}</span>
                  <button onClick={() => { props.removeTask(t.id) }}>X</button>
               </li>
               )
            }
         </ul>
         <div>
            <button onClick={() => { props.changeFilter('all') }}>All</button>
            <button onClick={() => { props.changeFilter('active') }}>Active</button>
            <button onClick={() => { props.changeFilter('completed') }}>Completed</button>
         </div>
      </div>
   )
}