import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './components/redux/state';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
root.render(
   <React.StrictMode>
      
      <BrowserRouter>
      <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </BrowserRouter>

   </React.StrictMode>
);
}
