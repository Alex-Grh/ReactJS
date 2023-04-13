import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let a = {
   name: 'James',
   age: 20,
   address: {
      city: 'New York',
      country: 'USA'
   }
};

let users = [
   {
      name: 'Robert',
      age: 25,
      address: {
         city: 'New York',
      country: 'USA'
      }
   },
   {
      name: 'David',
      age: 30,
      address: {
         city: 'New York',
      country: 'USA'
      }
   } 

]

console.log(users[0].address.country);