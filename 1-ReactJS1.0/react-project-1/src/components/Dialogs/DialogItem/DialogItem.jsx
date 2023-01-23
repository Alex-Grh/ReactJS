import React from "react";
import { NavLink } from "react-router-dom";
import s1 from './../Dialogs.module.css';

const DialogItem = (props) => {
   let path = '/dialogs/*' + props.id;
   return (
      <div className={`${s1.dialog} ${s1.active}`}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}

export default DialogItem;