import './App.css';
import NavBar from './Components/NavBar';
import MV from './Components/MV';
import Main from './Components/Main'
import Footer from './Components/Footer';
// import vids from "./vids";


function App() {
//   const vids = vids.map(item => {
//     return (
//         <vids 
//           title={item.title}
//           video={item.video}
//         />
//     )
// })  
  return (
    <div className="App">
      <NavBar />
      <Main />
      <MV />
      <Footer />
      {/* <section className="mv-list">
                {vids}
      </section> */}
    </div>
  );
}

export default App;
