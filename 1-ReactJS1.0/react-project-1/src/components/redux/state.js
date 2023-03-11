let store = {
   _state: {
      profilePage: {
   
         posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It\'s my first post 1', likesCount: 11 },
            { id: 3, message: 'It\'s my first post 2', likesCount: 11 },
            { id: 4, message: 'It\'s my first post 3', likesCount: 11 },
            { id: 5, message: 'It\'s my first post 4', likesCount: 11 }
         ],
         newPostText: 'Example'
   
      },
   
      dialogsPage: {
   
         dialogs: [
            { id: 1, name: 'Jack' },
            { id: 2, name: 'Harry' },
            { id: 3, name: 'Jacob' },
            { id: 4, name: 'Charley' },
            { id: 5, name: 'Thomas' },
            { id: 6, name: 'George' }
         ],
   
         messages: [
            { id: 1, message: 'Hello!' },
            { id: 2, message: 'We study here' },
            { id: 3, message: 'You do it really well' }
         ]
      }
   },
   getState() {
      return this._state;
   },
   _callSubscriber() {
      console.log('State changed');
   },
   addPost () {
      let newPost = {
         id: 5,
         message: this._state.profilePage.newPostText,
         likesCount : 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
   }, 
   updateNewPostText (newText) {   
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
   },
   subscribe (observer){
      this._callSubscriber = observer; // observer
   }
}

export default store;
window.state = store;