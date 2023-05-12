import React from 'react';

type ButtonPropsType = {
   name: string,
   collBack: () => void
}


export const Button = (props: ButtonPropsType) => {
   const onClickButtonHandler = () => {
      props.collBack()
   }
   return (
      <button onClick={onClickButtonHandler}>{props.name}</button>
   );
}; 