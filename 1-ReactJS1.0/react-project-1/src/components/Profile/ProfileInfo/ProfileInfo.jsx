import React from "react";
import s1 from './ProfileInfo.module.css';

const ProfileInfo = () => {
   return (
      <div>
         <div>
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" />
         </div>
         <div className={s1.descriptionBlock}>
            ava + description
         </div>
      </div>

   )
}

export default ProfileInfo;


