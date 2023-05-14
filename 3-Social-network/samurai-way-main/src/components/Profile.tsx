import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
   return <div className={s.content}>
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
         <div className={s.posts}>
            <div className={s.item}>Post 1</div>
            <div className={s.item}>Post 2</div>
         </div>
      </div>
   </div>
}

export default Profile;