import React from "react";
import s1 from './Dialogs.module.css';

const Dialogs = (props) => {
   return (
      <div className={s1.dialogs}>
         <div className={s1.dialogsItems}>
            <div className={`${s1.dialog} ${s1.active}`}>
               Jack
            </div>
            <div className={s1.dialog}>
               Harry
            </div>
            <div className={s1.dialog}>
               Jacob
            </div>
            <div className={s1.dialog}>
               Charley
            </div>
            <div className={s1.dialog}>
               Thomas
            </div>
            <div className={s1.dialog}>
               George
            </div>
         </div>
         <div className={s1.messages}>
            <div className={s1.message}>Hello</div>
            <div className={s1.message}>We study here</div>
            <div className={s1.message}>You do it really well</div>
         </div>
      </div>
   )
}

export default Dialogs;