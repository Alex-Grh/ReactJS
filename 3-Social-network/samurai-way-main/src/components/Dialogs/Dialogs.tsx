import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

type DialogItemType = {
   name: string
   id: number
}


const DialogItem = (props: DialogItemType) => {
   let path = "/dialogs/" + props.id;
   return (
      <div className={s.dialog + ' ' + s.active}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}

type MessageType = {
   message: string   
}

const Message = (props: MessageType) => {
   return (
      <div className={s.dialog}>{props.message}</div>
   )
}

const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <DialogItem name={"William"} id={1} />
            <DialogItem name={"Olivia"} id={2} />
            <DialogItem name={"Henry"} id={3} />
            <DialogItem name={"Emma"} id={4} />
            <DialogItem name={"Theodore"} id={5} />
            <DialogItem name={"Mia"} id={6} />
         </div>
         <div className={s.messages}>
            <Message message={"Hi"}/>
            <Message message={"How is your"}/>
            <Message message={"Yo"}/>           
            <Message message={"Yo"}/>           
            <Message message={"Yo"}/>           
         </div>
      </div>
   )
}

export default Dialogs; 