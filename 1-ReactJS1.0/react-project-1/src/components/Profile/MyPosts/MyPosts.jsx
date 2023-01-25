import React from "react";
import s1 from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

   let postElements = 
   props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);

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
            {postElements}           
         </div>

      </div>
   )
}

export default MyPosts;


