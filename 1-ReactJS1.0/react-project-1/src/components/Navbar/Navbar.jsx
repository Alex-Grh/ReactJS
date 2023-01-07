import React from "react";
import s1 from './Navbar.module.css';
// console.log(s1);
const Navbar = () => {
   return <nav className={s1.nav}>
      <div className={s1.item}>
         <a>Profile</a>
      </div>
      <div className={`${s1.item} ${s1.active}`}>
         <a>Messages</a>
      </div>
      <div className={s1.item}>
         <a>News</a>
      </div>
      <div className={s1.item}>
         <a>Music</a>
      </div>
      <div className={s1.item}>
         <a>Settings</a>
      </div>
   </nav>
}

export default Navbar;