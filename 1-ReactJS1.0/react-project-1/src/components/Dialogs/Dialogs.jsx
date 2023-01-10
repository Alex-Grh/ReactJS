import React from "react";
import { NavLink } from "react-router-dom";
import s1 from './Dialogs.module.css';

const DialogItem = (props) => {
   let path = '/dialogs/*' + props.id;
   return (
      <div className={`${s1.dialog} ${s1.active}`}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}

const Message = (props) => {
   return (
      <div className={s1.message}>{props.message}</div>
   )
}

const Dialogs = (props) => {
   let dialogsData = [
      { id: 1, name: 'Jack' },
      { id: 2, name: 'Harry' },
      { id: 3, name: 'Jacob' },
      { id: 4, name: 'Charley' },
      { id: 5, name: 'Thomas' },
      { id: 6, name: 'George' }
   ]
   let messageData = [
      { id: 1, message: 'Hello!' },
      { id: 2, message: 'We study here' },
      { id: 3, message: 'You do it really well' },  
   ]

   return (
      <div className={s1.dialogs}>
         <div className={s1.dialogsItems}>

            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />

         </div>
         <div className={s1.messages}>
            <Message message={messageData[0].message} id={messageData[0].id} />
            <Message message={messageData[1].message} id={messageData[1].id} />
            <Message message={messageData[2].message} id={messageData[2].id} />
         </div>
      </div>
   )
}

export default Dialogs;