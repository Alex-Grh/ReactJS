import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s1 from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

   let posts = [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: 'It\'s my first post 1', likesCount: 11 },  
      { id: 3, message: 'It\'s my first post 2', likesCount: 11 },
      { id: 4, message: 'It\'s my first post 3', likesCount: 11 },
      { id: 5, message: 'It\'s my first post 4', likesCount: 11 }   
   ]

   return (
      <div>
         <ProfileInfo />
         <MyPosts posts={posts}/>
      </div>
   )
}

export default Profile;


