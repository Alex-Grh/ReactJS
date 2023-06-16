type MssagesDataType = {
   id: number
   message: string
}
type DialogsDataType = {
   id: number
   name: string
}

type PostDataType = {
   id: number
   message: string
   likesCount: number
}

type ProfilePageType = {
   postData: Array<PostDataType>
}
type DialogsPageType = {
   dialogsData: Array<DialogsDataType>
   messagesData: Array<MssagesDataType>
}
type SidebarType = {}

type RootStateType = {
   profilePage: ProfilePageType
   dialogsPage: DialogsPageType
   sidebar: SidebarType
}

export let state: RootStateType = {
   profilePage: {
      postData: [
         { id: 1, message: "Hi, how are you?", likesCount: 12 },
         { id: 2, message: "Its my first post", likesCount: 11 },
         { id: 3, message: "Its my two post", likesCount: 25 }
      ]
   },
   dialogsPage: {
      dialogsData: [
         { id: 1, name: "William" },
         { id: 2, name: "Olivia" },
         { id: 3, name: "Henry" },
         { id: 4, name: "Emma" },
         { id: 5, name: "Theodore" },
         { id: 6, name: "Mia" }
      ],
      messagesData: [
         { id: 1, message: "Hi" },
         { id: 2, message: "How is your" },
         { id: 3, message: "Yo" },
         { id: 4, message: "Yo" },
         { id: 5, message: "Yo" }
      ]
   },
   sidebar: {}
}