import React from "react";
import s1 from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
   return (
      <div className={s1.postBlock}>
        <h3>My post</h3> 
         <div>
            <div>
               <textarea></textarea>
            </div>
            <div>
               <button>Add post</button>
            </div>
         </div>
         <div className={s1.posts}>
            {/* <Post message='Hi, how are you?' />
            <Post message="It's my first post" /> */}
            <Post message='Hi, how are you?' likesCount='15' />
            <Post message="It's my first post" likesCount='20' />
         </div>

      </div>
   )
}

export default MyPosts;


