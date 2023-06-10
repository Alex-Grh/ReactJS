import React, { ChangeEvent, useState } from 'react';

type EditableSpanPropsType = {
   title: string
   changTitle: (newTitle: string) => void
}


export const EditableSpan = (props: EditableSpanPropsType) => {
   const [isEditMode, setIsEditMode] = useState<boolean>(false)
   const [title, setTitle] = useState(props.title)
   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
   }
   const onEditMode = () => setIsEditMode(true)
   const offEditMode = () => {
      props.changTitle(title)
      setIsEditMode(false)
   }
   return (
      isEditMode
         ? <input 
         autoFocus 
         onChange={onChangeHandler }
         onBlur={offEditMode}
         value={title} />
         : <span 
         onDoubleClick={onEditMode}>{props.title}</span>
   );
};