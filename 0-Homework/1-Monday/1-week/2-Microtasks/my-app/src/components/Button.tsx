import React from "react";

type ButtonType = {
   nameButton: string
   collBack: () => void
}


export const Button = (props: ButtonType) => {

   const onClickHandler = () => {
      props.collBack()
   }
   return (
      <button onClick={onClickHandler}>{props.nameButton}</button>
   )
}