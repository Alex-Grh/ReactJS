import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

type AddItemFormType = {
   addItem: (title: string) => void
}


export const AddItemForm = (props: AddItemFormType) => {
   const [title, setTitle] = useState('')
   const [error, setError] = useState<boolean>(false)

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
   }

   const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      setError(false);
      if (e.key === 'Enteer') {
         addItem();
      }
   }

   const addItem = () => {
      const trimmedTitle = title.trim()
      if (trimmedTitle) {
         props.addItem(trimmedTitle)
         setTitle('');
      } else {
         setError(true)
      }
   }
   const userErrorMessage = <div className={'error-message'}>Title is required</div>
   return (
      <div>
         <input value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            className={error ? 'error' : ''}
         />
         {error && userErrorMessage}
         <button onClick={addItem}>+</button>
      </div>
   );
};
