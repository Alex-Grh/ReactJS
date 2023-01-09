import React, { Profiler } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <Header />
            <Navbar />

            {/* <News /> */}
            {/* <Music /> */}
            {/* <Settings/> */}

            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/dialogs/*' element={<Dialogs />} />
                  <Route path='/news' element={<News />} />
                  <Route path='/music' element={<Music />} />
                  <Route path='/settings' element={<Settings />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App; 
