import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s1 from './Profile.module.css';

const Profile = () => {
   return (
      <div className={s1.content}>
         <div>
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" />
         </div>
         <div>
            ava + description
         </div>
         <MyPosts />
      </div>
   )
}

export default Profile;


