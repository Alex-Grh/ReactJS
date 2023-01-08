import React from "react";
import s1 from './Navbar.module.css';
// console.log(s1);
const Navbar = () => {
   return <nav className={s1.nav}>
      <div className={s1.item}>
         <a href="/profile">Profile</a>
      </div>
      <div className={`${s1.item} ${s1.active}`}>
         <a href="/dialogs">Messages</a>
      </div>
      <div className={s1.item}>
         <a href="/news">News</a>
      </div>
      <div className={s1.item}>
         <a href="/music">Music</a>
      </div>
      <div className={s1.item}>
         <a href="/settings">Settings</a>
      </div>
   </nav>
}

export default Navbar;