import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
   { id: 1, message: 'Hi, how are you?', likesCount: 12 },
   { id: 2, message: 'It\'s my first post 1', likesCount: 11 },  
   { id: 3, message: 'It\'s my first post 2', likesCount: 11 },
   { id: 4, message: 'It\'s my first post 3', likesCount: 11 },
   { id: 5, message: 'It\'s my first post 4', likesCount: 11 }   
]

  let dialogs = [
      { id: 1, name: 'Jack' },
      { id: 2, name: 'Harry' },
      { id: 3, name: 'Jacob' },
      { id: 4, name: 'Charley' },
      { id: 5, name: 'Thomas' },
      { id: 6, name: 'George' }
   ]

   let messages = [
      { id: 1, message: 'Hello!' },
      { id: 2, message: 'We study here' },
      { id: 3, message: 'You do it really well' },
   ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
