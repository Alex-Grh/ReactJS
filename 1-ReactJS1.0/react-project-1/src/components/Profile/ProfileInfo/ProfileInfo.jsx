import React from "react";
import s1 from './ProfileInfo.module.css';

const ProfileInfo = () => {
   return (
      <div>
         <div>
            <img src="https://i.pinimg.com/originals/98/24/3b/98243bd48c963ca65580c5b6fb93be1f.jpg" />
         </div>
         <div className={s1.descriptionBlock}>
            ava + description
         </div>
      </div>

   )
}

export default ProfileInfo;


