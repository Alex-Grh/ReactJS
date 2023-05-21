import React, { useState } from 'react';
import s from './Counter.module.css'
import Buttonclick from './Buttonclick';

const Counter = () => {
   const maxValue:number = 5;
   const minValue:number = 0;

   const [num, setNum] = useState<number>(minValue)  
   const incNumber = () => {
      if (num < maxValue) {
         setNum(num + 1)
      }
   }
   const resetNumber = () => {
      setNum(minValue)
   }

   return (
      <div className={s.counter}>
         <div className={s.counterScreen}>
         <div className={num === maxValue ? s.resultNumber: s.result}>{num}</div>
         </div>
         <div className={s.buttonNum}>
            <Buttonclick name={'inc'} callBack={incNumber} disabled={num === maxValue} />
            <Buttonclick name={'reset'} callBack={resetNumber} disabled={num === minValue} />
         </div>
      </div>
   )
}


export default Counter;