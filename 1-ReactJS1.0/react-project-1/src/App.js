// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const App = () => {
   return (
      <div>
         <Header />
        <Technologies />
      </div>
   );
}

const Technologies = () => {
   return (
      <div>
         <ul>
            <li>html</li>
            <li>css</li>
            <li>js</li>
            <li>react</li>
         </ul>
      </div>
   );
}

const Header = () => {
   return (<div>
      <a href='#s'>Home</a>
      <a href='#s'>News Feed</a>
      <a href='#s'>Messages</a>
   </div>);
}

export default App;
