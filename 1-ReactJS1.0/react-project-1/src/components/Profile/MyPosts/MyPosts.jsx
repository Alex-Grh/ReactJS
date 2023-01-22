import React from "react";
import s1 from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

   let posts = [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: 'It\'s my first post 1', likesCount: 11 },  
      { id: 3, message: 'It\'s my first post 2', likesCount: 11 },
      { id: 4, message: 'It\'s my first post 3', likesCount: 11 },
      { id: 5, message: 'It\'s my first post 4', likesCount: 11 }   
   ]

   let postElements = 
   posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);

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


