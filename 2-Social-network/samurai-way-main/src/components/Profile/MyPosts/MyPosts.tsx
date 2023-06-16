import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { state } from '../../redux/state';

const MyPosts = () => {

   let postsElements = state.profilePage.postData
   .map(p => <Post message={p.message} likesCount={p.likesCount} />)
   return (
      <div className={s.postsBlock}>
         <h3>My post</h3>
         <div>
            <div>
               <textarea></textarea>
            </div>
            <div>
               <button>Add post</button>
            </div>
         </div>
         <div className={s.posts}>
           {postsElements}
         </div>
      </div>
   )
}

export default MyPosts;   