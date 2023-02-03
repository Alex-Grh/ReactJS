import React from "react";
import s1 from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

   let postElements =
      props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

   let newPostElement = React.createRef();

   let addPost = () => {
      props.addPost();      
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
   }

   return (
      <div className={s1.postBlock}>
         <h3>My post</h3>
         <div>
            <div>
               <textarea onChange={onPostChange} ref={newPostElement}
                  value={props.newPostText} />
            </div>
            <div>
               <button onClick={addPost}>Add post</button>
            </div>
         </div>
         <div className={s1.posts}>
            {postElements}
         </div>

      </div>
   )
}

export default MyPosts;


