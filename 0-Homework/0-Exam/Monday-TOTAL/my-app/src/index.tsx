// import React from 'react';
// import './index.css';
// import App from './App';
// import { createRoot } from 'react-dom/client';

// const container  = document.getElementById('root') as HTMLElement
// const root = createRoot(container);
// root.render(<App />);



//! 1
// Вопрос:

// Что нужно написать вместо ххх, что бы код работал?

// copy
// type UserPropsType = {
//     name: string
//     description: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>
//         <h1>Имя: {props.name}</h1>
//         //<div>Описание: {props.description}</div>
//     </div>
// }

//Что нужно написать вместо ххх, что бы код работал?
// props.description



//! 2
// Вопрос:

// Что нужно написать вместо xxx и yyy? Ответ дайте через пробел, например:
// blabla onClick(props)

// copy
// type PagePropsType = {
//     age: number
//     name: string
//     avatarUrl: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
//     return <User a={props.age} n={props.name} />
// }
// type UserPropsType = {
//     a: number
//     n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>name: {props.n}, age: {props.a}</div>
// }

// Что нужно написать вместо xxx и yyy? 
// Ответ дайте через пробел, например: blabla onClick(props)
// props.age props.name


//! 3
// Вопрос:

// Что нужно написать вместо xxx и yyy, чтобы компонент UserMoney отобразил информацию о двух кошельках (bitcoin и $)?

// Ответ дайте через пробел, например: props.x wallets

// copy
// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }

// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }

// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]

//     return <div>
//         <UserWallet wallet={wallets[0]} />
//         <UserWallet wallet={wallets[1]} />
//     </div>
// }
//wallets[0] wallets[1]



//! 4 
// Вопрос:

// Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел

// copy
// import ReactDOM from 'react-dom'

// const Son = (props: any) => {
//     return <div>
//         I am son. My name is {props.name}
//     </div>
// }


// const Father = (props: any) => {
//     return <div>
//         I am father. My name is {props.name}
//         <Son name={props.sonName} />
//     </div>
// }

// const Granny = (props: any) => {
//     return <div>
//         I am granny. My name is {props.name}
//         <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
// }

// export const App = () => {
//     return <div>
//         <Granny name={'Бабуля'} fatherName={'Батя'} sonName={'Сын'}/>
//     </div>
// }

// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )
//name fatherName sonName




//! 5
// Вопрос:

// Чему равно results.length?

// copy
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
// // console.log(results.length)
//     const users = results[0]
//     const setUsers = results[1]

//     return (
//        <p>Тут будет список пользователей</p>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// Чему равно results.length?
//2




//! 6 
// Вопрос:

// Что вернёт выражение: typeof setUsers?

// copy
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     console.log(typeof setUsers)
//     return (
//        <p>Тут будет список пользователей</p>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что вернёт выражение: typeof setUsers?
//function


//! 7
// Вопрос:

// Что надо написать вместо XXX, чтобы код работал?
// ❗ Если мы отмапим массив, то должны увидеть данные пользователей
// ❗ Ответ дать минимально возможным объёмом кода

// copy
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     age: number
// }

// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }

// function UsersList() {
//     const state = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 25},
//         {id: 3, name: "Ann", age: 30},
//         {id: 4, name: "John", age: 23},
//     ]
//     const users = [
//         {id: 1, userName: "Bob", age: 34},
//         {id: 2, userName: "Alex", age: 25},
//         {id: 3, userName: "Ann", age: 30},
//         {id: 4, userName: "John", age: 23},
//     ]
    
//     const [usersList, setUsersList] = useState<Array<UserType>>(state)
//     return (
//         <main>
//             <h5>User list:</h5>
//             <p>Тут будет список пользователей</p>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо XXX, чтобы код работал?
// ❗ Если мы отмапим массив, то должны увидеть данные пользователей
// ❗ Ответ дать минимально возможным объёмом кода
//state




//! 8 
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

// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
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
//     // Пользователи старше 25 лет:
//     const olderThen25Users = users.filter(u => u.age > 25)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {/*{ olderThen25Users.map(u => <User key={u.id} {...u}/>)}*/}
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал?
//filter



//! 9
// Вопрос:

// Какой тип данных представляет аргумент функции-обработчика?

// Что надо написать вместо ххх, что бы в консоль вывело true?

// copy
// import React, {MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Button() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         console.log((typeof e) === 'object')
//     }
//     return <button onClick={onClickHandler} >Click</button>
// }


// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );

// Какой тип данных представляет аргумент функции-обработчика?
// Что надо написать вместо ххх, что бы в консоль вывело true?




//! 10
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
// Что надо написать вместо xxx, чтобы код работал?
// props.id



//! 11
// Вопрос:

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
//                 // xxx
//                 value={userName}
//                 onChange={(e) => setUserName(e.currentTarget.value)}
//             />
//         </div>
//     )
// }

// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
// Что надо написать вместо ххх, чтобы инпут был контролируемым?
//value={userName}




//! 12

// Вопрос:

// Что надо написать вместо ххх, чтобы при клике список заметок очищался?

// copy
// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

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
//()=>setNotes([])