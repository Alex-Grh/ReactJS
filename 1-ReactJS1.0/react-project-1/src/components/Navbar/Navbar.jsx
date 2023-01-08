import React from "react";
import { NavLink } from "react-router-dom";
import s1 from './Navbar.module.css';
// console.log(s1);
const Navbar = () => {
   return (
      <nav className={s1.nav}>
         <div className={s1.item}>            
         <NavLink to="/profile" >Profile</NavLink>
         </div>
         <div className={`${s1.item} ${s1.active}`}>
         <NavLink to="/dialogs" >Messages</NavLink>
         </div>
         <div className={s1.item}>
         <NavLink to="/news" >News</NavLink>
         </div>
         <div className={s1.item}>
         <NavLink to="/music" >Music</NavLink>
         </div>
         <div className={s1.item}>
         <NavLink to="/settings" >Settings</NavLink>
         </div>
      </nav>
   )
}

export default Navbar;