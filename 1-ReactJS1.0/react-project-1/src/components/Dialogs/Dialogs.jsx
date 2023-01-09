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
   return (
      <div className={s1.dialogs}>
         <div className={s1.dialogsItems}>

            <DialogItem name='Jack' id='1' />
            <DialogItem name='Harry' id='2' />
            <DialogItem name='Jacob' id='3' />
            <DialogItem name='Charley' id='4' />
            <DialogItem name='Thomas' id='5' />
            <DialogItem name='George' id='6' />
          
         </div>
         <div className={s1.messages}>
            <Message message='Hello!'/>
            <Message message='We study here'/>
            <Message message='You do it really well'/>          
         </div>
      </div>
   )
}

export default Dialogs;