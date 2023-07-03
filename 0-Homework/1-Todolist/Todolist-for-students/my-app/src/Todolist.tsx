import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValuesType } from "./App";
import { AddItemForm } from "./AddItemForm";
import { EditableSpan } from "./EditableSpan";
import { Button, Checkbox, IconButton } from "@material-ui/core";
import { CheckBox, Delete } from "@material-ui/icons";

export type TaskType = {
   id: string
   title: string
   isDone: boolean
}

type PropsType = {
   id: string
   title: string
   tasks: TaskType[]
   removeTask: (taskId: string, todolistId: string) => void
   changeFilter: (value: FilterValuesType, todolist: string) => void
   addTask: (title: string, todolistId: string) => void
   changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
   changeTaskTitle: (id: string, newTitle: string, todolistId: string) => void
   filter: FilterValuesType
   removeTodolist: (todolistId: string) => void
   changeTodolistTitle: (id: string, newTitle: string) => void
}


export function Todolist(props: PropsType) {

   const onAllClickHandler = () => { props.changeFilter('all', props.id) }
   const onActiveClickHandler = () => { props.changeFilter('active', props.id) }
   const onCompletedClickHandler = () => { props.changeFilter('completed', props.id) }

   const removeTodolist = () => {
      props.removeTodolist(props.id);
   }
   const changeTodolistTitle = (newtitle: string) => {
      props.changeTodolistTitle(props.id, newtitle);
   }


   const addTask = (title: string) => {
      props.addTask(title, props.id);
   }


   return (
      <div>
         <h3><EditableSpan title={props.title} onChange={changeTodolistTitle} />
            <IconButton onClick={removeTodolist}>
               <Delete />
            </IconButton>
         </h3>
         <AddItemForm addItem={addTask} />
         <ul>
            {
               props.tasks.map(t => {
                  const onClickHandler = () => { props.removeTask(t.id, props.id) }
                  const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                     const newIsDoneValue = e.currentTarget.checked;
                     props.changeTaskStatus(t.id, newIsDoneValue, props.id)
                  }

                  const onChangeTitleHandler = (newValue: string) => {
                     props.changeTaskTitle(t.id, newValue, props.id)
                  }

                  return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                     <Checkbox 
                        onChange={onChangeStatusHandler}
                        checked={t.isDone} />

                     <EditableSpan title={t.title} onChange={onChangeTitleHandler} />
                     {/* <button onClick={onClickHandler}>X</button> */}
                     <IconButton onClick={onClickHandler}>
                        <Delete />
                     </IconButton>
                  </li>
               })
            }
         </ul>
         <div>
            <Button variant={props.filter === "all" ? "contained" : "text"}
               onClick={onAllClickHandler}>All</Button>
            <Button color={'primary'} variant={props.filter === "active" ? "contained" : "text"}
               onClick={onActiveClickHandler}>Active</Button>
            <Button color={'secondary'} variant={props.filter === "completed" ? "contained" : "text"}
               onClick={onCompletedClickHandler}>Completed</Button>
         </div>
      </div>
   )
}
