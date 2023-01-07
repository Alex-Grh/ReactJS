import React from "react";
import s1 from './Post.module.css';

const Post = () => {
   return (
      <div className={s1.item}>
         <img src="https://klike.net/uploads/posts/2018-06/1528370342_10.jpg" />
         post 1
         <div>
            <span>like</span>
         </div>
      </div>
   )
}

export default Post;


