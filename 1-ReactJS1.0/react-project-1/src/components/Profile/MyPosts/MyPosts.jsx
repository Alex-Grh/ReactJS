import React from "react";
import s1 from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

   let postElements =
      props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

let newPostElement = React.createRef();

   let addPost = () => {
      let text = newPostElement.current.value;
      alert(text);
   }

   return (
      <div className={s1.postBlock}>
         <h3>My post</h3>
         <div>
            <div>
               <textarea ref={newPostElement}></textarea>
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


