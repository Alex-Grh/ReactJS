import React from "react";
import s1 from './Post.module.css';

const Post = (props) => {
   // console.log(props.message);
   return (
      <div className={s1.item}>
         <img src="https://klike.net/uploads/posts/2018-06/1528370342_10.jpg" />
         {props.message}
         <div>
            {/* <span>like</span>*/}
            <span>like</span> {props.likesCount}
         </div>
      </div>
   )
}

export default Post;


