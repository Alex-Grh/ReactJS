import React from 'react';
import s from './Buttonclick.module.css'

type ButtonType = {
   name: string
   callBack: ()=>void
   disabled: boolean
}


const Buttonclick = (props: ButtonType) => {

     return (
      <div>
           <button onClick={props.callBack} disabled={props.disabled} className={s.button}>{props.name}</button>            
      </div>
   )
}


export default Buttonclick;