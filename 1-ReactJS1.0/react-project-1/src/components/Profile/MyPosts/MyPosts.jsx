import React from "react";
import s1 from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
   return (
      <div>
         My post
         <div>
            <textarea></textarea>
            <button>Add post</button>
         </div>
         <div className={s1.posts}>
           <Post />
           <Post />
           <Post />
           <Post />
           <Post />
           <Post />
         </div>
      </div>
   )
}

export default MyPosts;


