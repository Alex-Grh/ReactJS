import React from 'react';
import s from './Post.module.css';

type PostType = {
message: string
likesCount: number
}

const Post = (props: PostType) => {
   return (
      <div className={s.item}>
         <img src="https://i.pinimg.com/236x/5e/0b/97/5e0b978aeaf345a4d0dc94f551e49a59.jpg" alt="" />
         {props.message}
         <div><span>like {props.likesCount}</span></div>
      </div>
   )
}

export default Post;   