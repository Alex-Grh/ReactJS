import React from "react";

type NewFilterCurrentMoneyType = {
   currentMoney:currentMoneyType[]
   onClickFilterHandler:any
}
type currentMoneyType = {
   banknots:string
   value:number
   number:string
}


export const NewFilterCurrentMoney = (props:NewFilterCurrentMoneyType) => {
   return(
      <>
         <ul>
      {props.currentMoney.map((objFromMoneyArr, index) => {
         return (
            <li key={index}>
               <span>{objFromMoneyArr.banknots}</span>
               <span>{objFromMoneyArr.value}</span>
               <span>{objFromMoneyArr.number}</span>
            </li>
         )
      })}
      </ul>
      <br />
      <div style={{ marginLeft: '35px' }}>
      <button onClick={() => props.onClickFilterHandler('all')}>All</button>
      <button onClick={() => props.onClickFilterHandler('RUBLS')}>RUBLS</button>
      <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
      </div>
      </>
   )
}


