import React from 'react';
import './App.css';

// функция определена способом function declaration function App() {}
// можно было определить как function expression пример const App = function() {}
// можно было сделать функцию стрелочной const App = () => {}

function hello(){   
   alert ('Hello')
}
// hello();

function App() {
  return (
    <div>
     This is App component 
     <Rating/>
     <Accordion/>
    </div>
  );
}

function Rating() {
   return (
      <div>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      </div>
   )
}

function Star(){
   return(
      <div>star</div> 
   )
}

function Accordion() {
   return <div>
      <h3>Меню</h3>
      <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>
   </div>
}


export default App;
