import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating } from './components/Reting/Rating';

// функция определена способом function declaration function App() {}
// можно было определить как function expression пример const App = function() {}
// можно было сделать функцию стрелочной const App = () => {}

function hello() {
   alert('Hello')
}
// hello();

function App() {
   console.log('App rendering');
   return (
      <div>
         <PageTitle title={'This is App component'}/>
         <PageTitle title={'My Frends'}/>
         Article 1
         <Rating value={3} />
         <Accordion title={'This 1'}/>
         <Accordion title={'This 2'}/>
         Article 2
         <Rating value={0} />
         <Rating value={1} />
         <Rating value={2} />
         <Rating value={3} />
         <Rating value={4} />
         <Rating value={5} />
      </div>
   );
}

function PageTitle(props: any) {
   console.log('AppTitle rendering');
   return <h1>{props.title}</h1>
}

export default App;
