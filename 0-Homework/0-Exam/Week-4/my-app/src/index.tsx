// import React from 'react';
// import './index.css';
// import App from './App';
// import { createRoot } from 'react-dom/client';

// const container  = document.getElementById('root') as HTMLElement
// const root = createRoot(container);
// root.render(<App />);



//! 1
// Вопрос:

// Что надо написать вместо xxx, чтобы код работал?

// copy
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     age: number
// }

// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }

// function User(props: UserPropsType) {
//     return (
//         <li>
//             <button onClick={() => props.deleteUser(props.id)}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }

// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter(u => u.id !== userID)
//         setUsers(filteredUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал?
// props.id



//! 2
// Вопрос:

// Что надо написать вместо xxx, чтобы код работал?

// copy
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     age: number
// }

// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }

// function User(props: UserPropsType) {
//     const deleteUser = () => props.deleteUser(props.id)
//     return (
//         <li>
//             <button onClick={deleteUser}>Delete</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }

// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const updatedUsers = users.filter(u => u.id !== userID)
//         setUsers(updatedUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// Что надо написать вместо xxx, чтобы код работал?
// deleteUser




//! 3
// Вопрос:

// Что надо написать вместо ххх, чтобы Вас не направило на страницу Youtube при клике по ссылкe?

// copy
// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Post() {
//     const onClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
//       e.preventDefault()
//         alert("Летим-бомбим!!!")
//     }
//     return (
//         <div>
//             <article>
//                 <h4>Как дела, братан?</h4>
//                 <p>
//                     Вижу, что неплохо. Давай, трудись )))
//                     Google ждёт тебя в цифровом рабстве!
//                     Cтавь лайк и полетели!!!
//                 </p>
//                 <a href={"https://www.youtube.com/"}
//                    onClick={onClickHandler}
//                 >В этом месте подробнее...</a>
//             </article>
//         </div>
//     )
// }

// ReactDOM.render(
//     <Post/>, document.getElementById('root')
// );
// Что надо написать вместо ххх, чтобы Вас не направило на страницу Youtube
// при клике по ссылке?
//e.preventDefault()



//! 4 
// Вопрос:

// Что надо написать вместо ххх, чтобы данные из формы не отправлялись на сервер и страница не перезагружалась при клике по кнопке?

// copy
// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function AuthForm() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
       // xxx
      //   e.stopPropagation()  //Первое останавливает всплытие ивента
//         e.preventDefault()  //просто отменяет стандартное поведение кнопки
//         alert()
//     }
//     return (
//         <form>
//             <div>
//                 <label style={{padding: "10px 0"}}>
//                     Name:
//                     <input type={"email"} name={"email"}/>
//                 </label>
//             </div>
//             <div>
//                 <label style={{padding: "10px 0"}}>
//                     Password:
//                     <input type={"password"} name={"password"}/>
//                 </label>
//             </div>
//             <button
//                 onClick={onClickHandler}
//                 type={"submit"}>
//                 Log in
//             </button>
//         </form>
//     )
// }

// ReactDOM.render(
//     <AuthForm/>, document.getElementById('root')
// );
// Что надо написать вместо ххх, чтобы данные из формы
// не отправлялись на сервер и страница не перезагружалась
// при клике по кнопке?
//e.preventDefault()




//! 5
// Вопрос:

// Что надо написать вместо ххх, чтобы правильно типизировать параметр функции?

// copy
// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function User() {
//     const [userName, setUserName] = useState<string>("")
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=> setUserName(e.currentTarget.value)
//     return (
//         <div>
//             <p>{userName}</p>
//             <input
//                 // onChange={onChangeHandler}
//             />
//         </div>
//     )
// }

// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
// Что надо написать вместо ххх, чтобы правильно типизировать
// параметр функции?
//ChangeEvent<HTMLInputElement>





//! 6 
// Что надо написать вместо ххх, чтобы инпут был контролируемым?

// copy
// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function User() {
//     const [userName, setUserName] = useState<string>("")
//     return (
//         <div>
//             <p>{userName}</p>
//             <input  
//             value={userName}
//                 // xxx
//                //  type="value"
              
//                 onChange={(e) => setUserName(e.currentTarget.value)}
//             />
//         </div>
//     )
// }

// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
// Что надо написать вместо ххх, чтобы инпут был контролируемым?
// value={userName}




//! 7
// Вопрос:

// Что надо написать вместо ххх, чтобы после вывода текста в параграф содержимое формы ввода очищалось?

// copy
// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function User() {
//     const [userName, setUserName] = useState<string>("")
//     const [text, setText] = useState<string>("")
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement> )=> setUserName(e.currentTarget.value)
//     return (
//         <div>
//             <input
//                 value={userName}
//                 onChange={onChangeHandler}
//                 onBlur={()=> {
//                     // xxx
//                     setUserName('')
//                     setText(userName)
//                 }}
//             />
//             <p>{text}</p>
//         </div>
//     )
// }

// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
// Что надо написать вместо ххх,
// чтобы после вывода текста в параграф содержимое формы ввода очищалось?
//setUserName('')




//! 8 
// Вопрос:

// Что надо написать вместо ххх, чтобы при потере инпутом фокуса добавлялась заметка?

// copy
// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Notes() {
//     const [newNote, setNewNote] = useState<string>("")
//     const [notes, setNotes] = useState<Array<string>>([])
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=> 
//          setNewNote(e.currentTarget.value)
//     const addNote = () => {
//         setNotes([newNote, ...notes])
//         setNewNote("")
//     }
//     return (
//         <div>
//             <textarea
//                 value={newNote}
//                 onChange={onChangeHandler}
//                 // xxx = {addNote}
//                 onFocus = {addNote}
//             />
//             <h4>Notes:</h4>
//             <div>
//                 {notes.map((n,i )=> <p key={i}>{n}</p>)}
//             </div>
//         </div>
//     )
// }


// ReactDOM.render(
//     <Notes/>, document.getElementById('root')
// );
// Что надо написать вместо ххх,
// чтобы при потере инпутом фокуса добавлялась заметка?
//! вопрос onFocus неправильно




//! 9
// Вопрос:

// Что надо написать вместо ххх, чтобы при клике список заметок очищался?

// copy
// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import { clear } from 'console';

// function Notes() {
//     const [newNote, setNewNote] = useState<string>("")
//     const [notes, setNotes] = useState<Array<string>>([])
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=> 
//         setNewNote(e.currentTarget.value)
//     const addNote = () => {
//         setNotes([newNote, ...notes])
//         setNewNote("")
//  }
//     return (
//         <div>
//             <textarea
//                 value={newNote}
//                 onChange={onChangeHandler}
//                 onBlur={addNote}
//             />
//             <div>
//                 <button
//                 // onClick={xxx}
//                     onClick={()=>setNotes([])}
                    
//                 >Clear notes list</button>
//             </div>
//             <h4>Notes:</h4>
//             <div>
//                 {notes.map(n => <p>{n}</p>)}
//             </div>
//         </div>
//     )
// }

// ReactDOM.render(
//     <Notes/>, document.getElementById('root')
// );
// Что надо написать вместо ххх,
// чтобы при клике список заметок очищался?
// addNote неправильно
//!()=>setNotes([])


//! 10




