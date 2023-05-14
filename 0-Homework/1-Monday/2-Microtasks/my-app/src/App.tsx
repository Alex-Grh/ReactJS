import React, { MouseEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './site/Header';
import { Body } from './site/Body';
import { Footer } from './site/Footer';
import { NewComponent } from './site/NewComponent';
import { NewComponentTopCars } from './site/NewComponentTopCars';
import { Button } from './components/Button';
import { NewFilterCurrentMoney } from './components/NewFilterCurrentMoney';

function App() {
   // let [students, setStudents] = useState(intialState: [
   let students = [
      { id: 1, name: "James1", age: 11 },
      { id: 2, name: "James2", age: 12 },
      { id: 3, name: "James3", age: 13 },
      { id: 4, name: "James4", age: 14 },
      { id: 5, name: "James5", age: 15 },
      { id: 6, name: "James6", age: 16 },
      { id: 7, name: "James7", age: 17 },
      { id: 8, name: "James8", age: 18 },
      { id: 9, name: "James9", age: 19 },
   ];
   const topCars = [
      { manufacturer: 'BMW', model: 'm5cs' },
      { manufacturer: 'Mercedes', model: 'e63s' },
      { manufacturer: 'Acura', model: 'CDX' },
      { manufacturer: 'Bugatti', model: 'Chiron' },
      { manufacturer: 'Cadillac', model: 'Allante' },
      { manufacturer: 'Lamborghini', model: 'Aventador' }
   ]

   //  const myFirstSubscribe = (event: MouseEvent<HTMLButtonElement) => {
   //    console.log('Hello Im Vasya!')
   //  }
   //  const myTwoSubscribe = (event: MouseEvent<HTMLButtonElement) => {
   //    console.log('Hello Im Ivan!')
   //  }



   // const onClickHandler=(names:string)=>{
   //    console.log(names)
   // }



   // const foo1 = () => {
   //    // ничего не передавать в функцию, но в консоли должно показаться 100200
   //    console.log(100200)
   // }
   // const foo2 = (numb1: number) => {
   //    // передать в функцию цифру 100200
   //    console.log(numb1)
   // }


   // Мозги для универсальной кнопки
   const Button1Foo = (subscriber: string, age: number, adress: string) => {
      console.log(subscriber, age, adress)
   }
   const Button2Foo = (subscriber: string) => {
      console.log(subscriber)
   }
   const Button3Foo = () => {
      console.log('Im Stupid BUTTON')
   }

   // 4 useState

   // let a = 1;
   let [a, setA] = useState(1)

   const onClickHandler = () => {
      setA(++a);
      // console.log(a);
   }
   const onClickHandlerResetToZero = () => {
      setA(0);
   }


   //!5 filter

   type FilterType='all'|'Dollars'|'RUBLS'

   const [money, setMoney] = useState([
      { banknots: 'Dollars', value: 100, number: ' a1234567890' },
      { banknots: 'Dollars', value: 50, number: ' z1234567890' },
      { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
      { banknots: 'Dollars', value: 100, number: ' e1234567890' },
      { banknots: 'Dollars', value: 50, number: ' c1234567890' },
      { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
      { banknots: 'Dollars', value: 50, number: ' x1234567890' },
      { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
   ])
const[filter, setFilter]=useState<FilterType>('all')

   let currentMoney = money
   //если nameButton==='Dollars'
   if (filter === 'Dollars') {
      currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')
   }
   //если nameButton==='RUBLS'
   if (filter === 'RUBLS') {
      currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')
   }

   
   const onClickFilterHandler = (nameButton: FilterType) => {
      
      setFilter(nameButton)
   }   
   return (
      <>
         <div className="App">
            <Header title={"NEW HEADER"} />
            <Body titleForBody={"NEW BODY"} />
            <Footer titleForFooter={"NEW FOOTER"} />
            <NewComponent students={students} />
            <NewComponentTopCars topCars={topCars} />

            {/* <button onClick={myFirstSubscribe}>MyYouTubeChanel 1</button> */}
            {/* <button onClick={myTwoSubscribe}>MyYouTubeChanel 2</button> */}

            {/* <button onClick={(event: MouseEvent<HTMLButtonElement>) =>onClickHandler('Vasya')}>MyYouTubeChanel 1</button>  */}
            {/* <button onClick={(event: MouseEvent<HTMLButtonElement>) =>onClickHandler('Ivan')}>MyYouTubeChanel 2</button> */}
            {/* <button onClick={()=>onClickHandler('some info')}>MyYouTubeChanel 3</button>  */}

            {/* <button onClick={foo1}>Button 1</button>  */}
            {/* <button onClick={() => foo2(100200)}>Button 2</button> */}

            {/* Универсальная кнопка */}
            {/* <button>MyYouTubeChanel 1</button>
            <button>MyYouTubeChanel 2</button> */}
            <Button nameButton={'MyYouTubeChanel 1'} collBack={() => Button1Foo("Vasya", 21, "Live in NewYork")} />
            <Button nameButton={'MyYouTubeChanel 1'} collBack={() => Button2Foo("Ivan")} />
            <Button nameButton={'Stupid BUTTON'} collBack={Button3Foo} />
            <br />
            <br />
            {/* 4 useState */}
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerResetToZero}>0</button>
            <br />
            <br />
            {/* 5 filter */}

            {/* <>
         <ul>
      {currentMoney.map((objFromMoneyArr, index) => {
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
      <button onClick={() => onClickFilterHandler('all')}>All</button>
      <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>
      <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
      </div>
      </> */}
          <NewFilterCurrentMoney currentMoney={currentMoney} 
          onClickFilterHandler={onClickFilterHandler}/>
         </div>
      </>
   );
}

export default App;
