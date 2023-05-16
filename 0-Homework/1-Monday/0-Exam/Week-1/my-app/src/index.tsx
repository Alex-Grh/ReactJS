//! 1
// export const Wrapper  = () => {
//     return <Course city="minsk" />
// }
// type PropsType = {
//     city: string
// }
// export const Course: React.FC<PropsType> = (props) => {
//     return <div>hello</div>
// }

// /*
// В коде в разных местах допущена одна и та же ошибка.
// Какое слово должно быть написано вместо ошибочного?
// */
// Компонента всегда с большой буквы Course

//! 2
// import ReactDOM from 'react-dom'
// export const YoutubeVideoBlock = () => {
//     return <div>
//         <VideoHeader />
//         <VideoContent />
//         <VideoStatistics />
//     </div>
// }
// export const VideoHeader = () => {
//     return <div>
//         😀 Заголовок видео
//     </div>
// }
// export const VideoContent = () => {
//     return <div>
//         📼 Контент видео
//     </div>
// }
// export const VideoStatistics = () => {
//     return <div>
//         📊 Статистика лайков
//     </div>
// }
// ReactDOM.render(<div><YoutubeVideoBlock/></div>,
//     document.getElementById('root')
// );

//Что нужно написать вместо ххх, чтобы на экране увидеть:
//😀 Заголовок видео
//📼 Контент видео
//📊 Статистика лайков
// ❗ Ответ дать минимально возможным объёмом кода 


// <YoutubeVideoBlock/>


//! 3
// type UserPropsType = {
//    name: string
//    description: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//    return <div>
//        <h1>Имя: {props.name}</h1>
//        //<div>Описание: {props.description}</div>
       
//    </div>
// }

//Что нужно написать вместо ххх, что бы код работал? 

// props.description


//! 4 
// type PropsType = {
//    city: string        // 'minsk'
//    country: string     // 'belarus'
//    coords?: string     // '53.917501,27.604851'
// }
// export const Wrapper1 = () => {
//    return <PropsComponent1 city='minsk' country='belarus'/>
// }
// export const PropsComponent1: React.FC<PropsType> = (props) => {
//    return <div>hello</div>
// }



// Что МИНИМАЛЬНО ДОСТАТОЧНО нужно дописать в строке 8 (cтрока с ошибкой), чтобы не было ошибки
// {'minsk'} неправильно

// country='belarus'

//! 5
// type PagePropsType = {
//    age: number
//    name: string
//    avatarUrl: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
//    return <User a={props.age} n={props.name} />
// }
// type UserPropsType = {
//    a: number
//    n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//    return <div>name: {props.n}, age: {props.a}</div>
// }

// Что нужно написать вместо xxx и yyy? 
// Ответ дайте через пробел, например: blabla onClick(props)



// props.age props.name


//! 6 
// Что нужно написать вместо XXX и YYY? Ответ дайте через пробел, например:
// car user
// copy
// type NewsType = {
//     title: string
//     author: string
// }
// type ArticleType = {
//     title: string
//     date: string
//     text: string
// }
// type PagePropsType = {
//     news: NewsType[]
//     mainArticle: ArticleType
// }
// export const Page: React.FC<PagePropsType> = (props) => {
//     return <div>
//         <article>
//             <h1>Название: {props.mainArticle.title}</h1>           
//             <div>{props.mainArticle.date}</div>
//             <div>{props.mainArticle.text}</div>
//         </article>
//         <aside>Articles:
//             <ul>
//                 {props.news.map(n => <li>{n.title}, {n.author}</li>)}
//             </ul>
//         </aside>
//     </div>
// }



// mainArticle news



//! 7
// Что нужно написать вместо xxx и yyy, чтобы компонент UserMoney отобразил информацию о двух кошельках (bitcoin и $)?
// Ответ дайте через пробел, например: props.x wallets
// copy

// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }

// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }

// export const UserMoney = () => {
   
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]

//     return <div>
//         <UserWallet wallet={wallets[0]} />
//         <UserWallet wallet={wallets[1]} />
//     </div>
// }


// wallets[0] wallets[1]



//! 8 
// Что нужно написать вместо xxx yyy zzz, чтобы увидеть ожидаемый результат?

// Ответ дайте через пробел, пример: a={12} ccc={video.id} d={'hello'}

// copy


// import ReactDOM from 'react-dom'

// export const VideoHeader = (props: {videoName: string}) => {
//     return <div>
//         😀 {props.videoName}
//     </div>
// }
// export const VideoContent = (props: {videoContent: string}) => {
//     return <div>
//         📼 <a href={props.videoContent}>{props.videoContent}</a>
//     </div>
// }
// export const VideoDescription = (props: {videoDescription: string}) => {
//     return <div>
//         📑 {props.videoDescription}
//     </div>
// }

// export const YoutubeVideo = (props: any) => {
//     return <div>
//         <VideoHeader videoName={props.videoName} />
//         <VideoContent videoContent={props.videoContent} />
//         <VideoDescription videoDescription={props.videoDescription} />
//     </div>
// }

// export const App = () => {
//     const video = {
//         title: 'Samurai way',
//         link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
//         description: 'Best free react-course'
//     }

//     return <YoutubeVideo video={video} />
// }

// ReactDOM.render(<App />,
//     document.getElementById('root')
// );



//! Неправильно videoName={props.videoName} videoContent={props.videoContent} videoDescription={props.videoDescription}



//! 9
// Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел
// copy
// import ReactDOM from 'react-dom'

// const CrazyButton = (props: any) => {
//     const style = {
//         color: props.fontColor,
//         backgroundColor: props.bgColor
//     }
//     return <button style={style}>
//         {props.title}
//     </button>
// }
// export const App = () => {
//     return <div>
//         <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
//         <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
//     </div>
// }
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )
 


// fontColor bgColor title




//! 10
// Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел

// copy

// import ReactDOM from 'react-dom'

// const Son = (props: any) => {
//     return <div>
//         I am son. My name is {props.name}
//     </div>
// }


// const Father = (props: any) => {
//     return <div>
//         I am father. My name is {props.name}
//         <Son name={props.sonName} />
//     </div>
// }

// const Granny = (props: any) => {
//     return <div>
//         I am granny. My name is {props.name}
//         <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
// }

// export const App = () => {
//     return <div>
//         <Granny name={'Бабуля'} fatherName={'Батя'} sonName={'Сын'}/>
//     </div>
// }

// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )


//name fatherName sonName