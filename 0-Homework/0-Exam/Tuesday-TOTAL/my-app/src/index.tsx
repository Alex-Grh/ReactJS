// import React from 'react';
// import './index.css';
// import App from './App';
// import { createRoot } from 'react-dom/client';

// const container  = document.getElementById('root') as HTMLElement
// const root = createRoot(container);
// root.render(<App />);



//! 1
// Вопрос:

// Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?

// copy
// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function ColorButton() {
//     const [isColored, setIsColored] = useState<boolean>(false)
//     return (
//         <button
//             style={{ backgroundColor: `${ isColored === true ? "red": ""}`}}
//             onClick={()=>setIsColored(true)}
//         >
//           Меняю цвет по клику
//         </button>
//     )
// }


// ReactDOM.render(
//     <ColorButton/>, document.getElementById('root')
// );

// Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?
//isColored

//! 2
// Вопрос:

// Что надо вставить вместо XXX, чтобы код корректно работал со списком пользователей?

// copy
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string, i: number) => <li key={i}>{user}</li>

//      const usersList = (users.length === 0)
//         ? <p>List is empty</p>
//         :  <ul>
//             { users.map(getUser)}
//            </ul>

//     return (
//         <main>
//             <button onClick={()=>setUsers([])}>Clear list</button>
//             <h4>User list:</h4>
//                 {usersList}
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо вставить вместо XXX, чтобы код корректно работал  со списком пользователей?
//users.length

//! 3
// Вопрос:

// Что надо вставить вместо XXX, чтобы код работал нормально?

// copy
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function PasswordChecker() {
//     const [password, setPassword] = useState<string>("")
//     return (
//         <main>
//             <p>Your password must have more than 8 charters!</p>
//             <input
//                 placeholder={"Enter your password"}
//                 value={password}
//                 onChange={e => setPassword(e.currentTarget.value)}
//                 type={"password"}
//             />
//             {password.length < 9 && <p style={{color: "red"}}>The password is too short!</p>}
//         </main>
//     )
// }

// ReactDOM.render(
//     <PasswordChecker/>, document.getElementById('root')
// );

// Что надо вставить вместо XXX, чтобы код работал нормально?
//password.length


//! 4 
// Вопрос:

// Какое значение лежит тут: friends[3][1]?

// copy
// type StudentType = {
//     id: number
//     name: string
// }

// type FriendsType = {
//     [key: string]: Array<string>
// }

// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]

// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }

// console.log(friends[3][1])

//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Какое значение лежит тут:  friends[3][1]?
//!"Michael"


//! 5
// Вопрос:

// Какое значение лежит тут: friends[students[0].id][3]?

// copy
// type StudentType = {
//     id: number
//     name: string
// }

// type FriendsType = {
//     [key: string]: Array<String>
// }

// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]

// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
// console.log(friends[students[0].id][3])

//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Какое значение лежит тут: friends[students[0].id][3]?
//undefined


//! 6 
// Вопрос:

// Что надо написать вместо ххх, чтобы функция работала?

// copy
// type StudentType = {
//     id: number
//     name: string
// }

// type FriendsType = {
//     [key: string]: Array<string>
// }

// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]

// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }

// const getMutualFriends = (st_1: StudentType, st_2: StudentType,) => {
//     const result: Array<string> = []
//     friends[st_1.id].forEach(f => friends[st_2.id].includes(f)? result.push(f): null)
//     return result
// }

//Дан массив студентов и структура,
//которая содержит список друзей каждого из студентов.
// Так же дана функция  getMutualFriends, проверяющая наличие общих друзей
// у двух выбранных студентов.
//Функция принимает параметром два объекта типа StudentType
// и возвращает массив с именами общих друзей,
//если они есть и пустой массив, если таковых нету.
// Что надо написать вместо ххх, чтобы функция работала?
//st_2.id


//! 7
// Вопрос:

// Что надо написать вместо ххх, чтобы функция работала корректно?

// copy
// import React, {useState} from "react";

// type UserType = {
//     id: number
//     name: string
//     status: "online" | "offline"
// }

// type AddressType = {
//     country: string
//     city: string
//     email: string
// }

// type AdressesType = {
//     [userID: string]: AddressType
// }

// const users: Array<UserType> = [
//     {id: 1, name: "Bob", status: "online"},
//     {id: 2, name: "Alex", status: "offline"},
//     {id: 3, name: "Ann", status: "offline"},
// ]

// const addresses: AdressesType = {
//     1: {country: "Russia", city: "Moscow", email: "hey@email.com"},
//     2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},
//     3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},

// }

// const updateUserAddress = (userID: number, key: string, newValue: string) => {
//     return {...addresses,
//          [userID]: {...addresses[userID], [key]: newValue}
//     }
// }
// Дан список пользователей и структура, хранящая адреса пользователей.
// Так же дана функция updateUserAddress,
// которая обновляет указанное в параметрах поле в адресе пользователя.
// Пример использования функции: updateUserAddress(2, "city", "Dnepropetrovsk")
// Что надо написать вместо ххх, чтобы функция работала корректно?
//userID


//! 8 
// Вопрос:

// Что надо написать вместо XXX, что бы переменная result содержала значение 5?

// copy

// type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"
//     payload: number
// }

// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         default:
//             return state
//     }
// }

// const result = calculator(10, {type: "SUB", payload: 5})
// console.log(result)
//Что надо написать вместо XXX, что бы переменная result содержала значение 5?
//type: "SUB"


//! 9
// Вопрос:

// Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?

// copy

// type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"
//     payload: number
// }

// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         case "EXP":
//             return state ** action.payload
//         default:
//             return state
//     }
// }
// const result = calculator(10, {type: "EXP", payload: 0}) 
// if (!(result - 1)){
//     console.log("IT-INCUBATOR")
// }

//Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?
//type: "EXP"


//! 10
// Вопрос:

// Какой код должен быть написан вместо XXX и YYY в типе ChangeUserPasswordTypeAT, что бы редьюсер работал?

// В ответе напишите через пробел: XXX YYY.

// copy
type UserType = {
   id: number
   userName: string
   email: string
   password: string
}

type ChangeUserPasswordTypeAT = {
   type: "CHANGE-USER-PASSWORD"
   payload: {
      id: number
      newPassword: string
   }
}

export const userReducer =
   (state: UserType[], action: ChangeUserPasswordTypeAT): UserType[] => {
      switch (action.type) {
         case "CHANGE-USER-PASSWORD":
            return state.map(u =>
               u.id === action.payload.id
                  ? { ...u, password: action.payload.newPassword }
                  : u)
         default:
            return state
      }
   }

//Какой код должен быть написан вместо XXX и YYY в типе //ChangeUserPasswordTypeAT, что бы редьюсер работал?
//В ответе напишите через пробел: XXX  YYY
// id: number newPassword: string


//! 11




//! 12

