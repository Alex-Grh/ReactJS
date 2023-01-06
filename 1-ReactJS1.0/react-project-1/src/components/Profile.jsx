import React from "react";
import './Profile.css';

const Profile = () => {
   return <div className="content">
   <div>
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" />
   </div>
   <div>
      ava + description
   </div>
   <div>
      My post
      <div>
         New post
      </div>
      <div className="posts">
         <div className="item">
            post 1
         </div>
         <div className="item">
            post 2
         </div>
      </div>
   </div>
   </div>
}

export default Profile;


