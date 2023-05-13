import React from 'react';
import './App.css';

const App = () => {
   return (
      <div className='app-wrapper'>
         <header className='header'>
            <img src="https://graphicdesignbylisa.com/wp-content/uploads/generic-logo.jpg" alt="logo example" />
         </header>
         <nav className='nav'>
            <div>
               <a>Profile</a>
               </div>
            <div>
            <a>Messages</a>
            </div>
            <div>
            <a>News</a>
            </div>
            <div>
            <a>Music</a>
            </div>
            <div>
            <a>Settings</a>
            </div>
         </nav>
         <div className='content'>
            <div>
            <img src="https://pibig.info/uploads/posts/2022-11/1669713041_4-pibig-info-p-neitralnie-oboi-na-rabochii-stol-vkontakte-4.png" alt="" />
            </div>
            <div>
               ava + description
            </div>
            <div>
               My post
               <div>
                  New post
               </div>
               <div>
                  <div>Post 1</div>
                  <div>Post 2</div>
               </div>
            </div>
         </div>

      </div>
   );
}





export default App;
