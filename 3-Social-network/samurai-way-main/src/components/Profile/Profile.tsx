import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
   return (
      <div>
         <div className={s.picture}>
            <img src="https://pibig.info/uploads/posts/2022-11/1669713041_4-pibig-info-p-neitralnie-oboi-na-rabochii-stol-vkontakte-4.png" alt="" />
         </div>
         <div>
            ava + description
         </div>
         <MyPosts />
      </div>
   )
}

export default Profile;