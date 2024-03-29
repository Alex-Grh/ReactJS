import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValuesType } from "./App";
import { Button, IconButton, TextField } from "@material-ui/core";
import { ControlPoint } from "@material-ui/icons";

type AddItemFormPropsType = {
   addItem: (title: string) => void
}
export function AddItemForm(props: AddItemFormPropsType) {
   const [title, setTitle] = useState('');
   const [error, setError] = useState<string | null>(null);
   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
   }
   const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      setError(null);
      if (e.charCode === 13) {
         addTask();
      }
   }
   const addTask = () => {
      if (title.trim() !== "") {
         props.addItem(title.trim())
         setTitle('');
      } else {
         setError('Title is required');
      }
   }
   return <div>
      {/* <input value={title}
         onChange={onChangeHandler}
         onKeyPress={onKeyPressHandler}
         className={error ? 'error' : ''}
      /> */}
      <TextField value={title}
         variant={"outlined"}
         label={'Type value'}
         onChange={onChangeHandler}
         onKeyPress={onKeyPressHandler}
         error={!!error}
         helperText={error}
      />
      <IconButton onClick={addTask} color={'primary'}>
         <ControlPoint/>
      </IconButton>

   </div>
}