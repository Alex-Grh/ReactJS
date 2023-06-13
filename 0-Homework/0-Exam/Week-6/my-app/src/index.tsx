// import React from 'react';
// import './index.css';
// import App from './App';
// import { createRoot } from 'react-dom/client';

// const container  = document.getElementById('root') as HTMLElement
// const root = createRoot(container);
// root.render(<App />);



//! 1
// Вопрос:

// Дан список студентов и структура, которая содержит список друзей каждого из студентов. Что вернёт выражение: Array.isArray(friends)?

// copy

// type Student = {
//     id: number
//     name: string
// }
// type Students = Array<Student>
// type Friends = {
//     [key: string]: Array<string>
// }

// export const students: Students = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]

// export const friends: Friends = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
// console.log(Array.isArray(friends))

//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Что вернёт выражение: Array.isArray(friends)?
//false


//! 2
// Вопрос:

// Что вернёт выражение: Array.isArray(students)?

// copy
// type StudentType = {
//     id: number
//     name: string
// }
// type Students = Array<StudentType>
// type Friends = {
//     [key: string]: Array<string>
// }

// export const students: Students = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]

// export const friends: Friends = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
// console.log(Array.isArray(students))

//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов
//Id студента является ключом к массиву его друзей.
//Что вернёт выражение Array.isArray(students)?
//true


//! 3
// Вопрос:

// Имеют ли студенты students[1] и students[3] общих друзей? Если да, напишите 
// в ответе имя общего друга в кавычках, если нет - напишите в ответе false.

// copy
// type StudentType = {
//     id: number
//     name: string
//     age: number
// }

// type FriendsType = {
//     [key: string]: Array<string>
// }


// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob", age: 34},
//     {id: 2, name: "Alex", age: 23},
//     {id: 3, name: "Ann", age: 25},
//     {id: 4, name: "Charley", age: 20},
// ]

// export const friends: FriendsType = {
//     1: ["Jack","Oliver", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William",  "Lewis","Michael"],
//     4: ["Oscar", "Thomas", "William",],
// }
// console.log(students[1])
// console.log(students[3])


//Дан массив студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Имеют ли студенты students[1] и students[3] общих друзей?
//Если да, напишите в ответе имя общего друга в кавычках, если нет - напишите в ответе false.
//"Thomas"

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
//"Michael"

//! 5
// Вопрос:

// Какое значение лежит тут: friends[students[1].id][2]?

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
// console.log(friends[students[1].id][2])

//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Какое значение лежит тут: friends[students[1].id][2]?
//"Thomas"


//! 6 
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

//! 7
// Вопрос:

// Дан список самураев из инкубатора и структура, хранящая данные о курсах,

// которые самурай уже прошёл, а так же о тех курсах, которые ему ещё предстоит пройти. 
// Так же дана функция updateCourseStatus, которая позволяет отметить курс как пройденный 
// самураем или снять такую отметку. Что надо написать вместо XXX, чтобы функция работала корректно?

// copy
import React, {useState} from "react";

type samuraiType = {
    id: string
    name: string
    status: "online" | "offline"
}
type CourseNameType = "HTML"|"JS"|"React"|"Redux"|"HomeWorks"
type CourseType = {
    name: CourseNameType
    mentor: string
    isDone: boolean
}
type TechnologiesType = {
    [userID: string]: Array<CourseType>
}

const samuraiID_1 = "64jf-87kg"
const samuraiID_2 = "90lg-34ks"
const samuraiID_3 = "12jm-05fd"

export const samurai: Array<samuraiType> = [
    {id: samuraiID_1, name: "Bob", status: "online"},
    {id: samuraiID_2, name: "Alex", status: "offline"},
    {id: samuraiID_3, name: "Ann", status: "offline"},
]

export const technologies: TechnologiesType = {
    [samuraiID_1]: [
        {name: "HTML", mentor: "Svetlana", isDone: true},
        {name: "JS", mentor: "Viktor", isDone: true},
        {name: "React", mentor: "Dmitrij", isDone: false},
        {name: "Redux", mentor: "Valera", isDone: false},
        {name: "HomeWorks", mentor: "Ignat", isDone: true},
    ],
    [samuraiID_2]: [
        {name: "HTML", mentor: "Svetlana", isDone: true},
        {name: "JS", mentor: "Viktor", isDone: true},
        {name: "React", mentor: "Dmitrij", isDone: true},
        {name: "Redux", mentor: "Valera", isDone: false},
        {name: "HomeWorks", mentor: "Ignat", isDone: true},
    ],
    [samuraiID_3]: [
        {name: "HTML", mentor: "Svetlana", isDone: true},
        {name: "JS", mentor: "Viktor", isDone: true},
        {name: "React", mentor: "Dmitrij", isDone: false},
        {name: "Redux", mentor: "Valera", isDone: false},
        {name: "HomeWorks", mentor: "Ignat", isDone: false},
    ],
}

export const updateCourseStatus = (samuraiID: string, name: CourseNameType, isDone: boolean) => {
    return {...technologies,
         [samuraiID]: technologies[name].map(c => c.name === name ? {...c, isDone} : c)
      }
}
console.log(updateCourseStatus);
// Дан список самураев из инкубатора и структура, хранящая данные о курсах,
// которые самурай уже прошёл, а так же о тех курсах, которые ему ещё предстоит пройти.
// Так же дана функция updateCourseStatus,
// которая позволяет отметить курс как пройденный самураем или снять такую отметку
// Что надо написать вместо XXX, чтобы функция работала?
//name



//! 8 




//! 9





//! 10




