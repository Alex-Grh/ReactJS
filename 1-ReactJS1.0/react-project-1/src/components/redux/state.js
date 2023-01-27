let state = {
   profilePage: {

      posts: [
         { id: 1, message: 'Hi, how are you?', likesCount: 12 },
         { id: 2, message: 'It\'s my first post 1', likesCount: 11 },
         { id: 3, message: 'It\'s my first post 2', likesCount: 11 },
         { id: 4, message: 'It\'s my first post 3', likesCount: 11 },
         { id: 5, message: 'It\'s my first post 4', likesCount: 11 }
      ]

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
}

export default state;