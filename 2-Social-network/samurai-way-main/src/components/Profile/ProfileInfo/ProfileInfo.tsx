import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
   return (
      <div>
         <div className={s.picture}>
            <img src="https://pibig.info/uploads/posts/2022-11/1669713041_4-pibig-info-p-neitralnie-oboi-na-rabochii-stol-vkontakte-4.png" alt="" />
         </div>
         <div className={s.descriptionBlock}>
            ava + description
         </div>
      </div>
   )
}

export default ProfileInfo;