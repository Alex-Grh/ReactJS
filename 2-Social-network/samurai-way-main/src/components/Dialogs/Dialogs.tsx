import React from 'react';
import s from './Dialogs.module.css';
import { state } from '../redux/state';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';




const Dialogs = () => {
   let dialogsElements = state.dialogsPage.dialogsData
   .map(d => <DialogItem name={d.name} id={d.id} /> )

   let messagesElements = state.dialogsPage.messagesData
   .map(m => <Message message={ m.message} />)


   return (
      
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
          {messagesElements}
         </div>
      </div>
   )
}

export default Dialogs; 