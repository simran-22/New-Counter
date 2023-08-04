import './App.css';
import './Components/style.css';
import MainFile from './Components/MainFile';
// import '../node_modules/bootstrap/dist.css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TopBar from './Components/TopBar';
import FileSection from './Components/FileSection';
// import Carousel from './Components/Carousel';

function App() {
  return (
    <div className="App">
     {/* <Temperature/> */}
     <TopBar />
     <MainFile />
     {/* <Carousel /> */}
     <FileSection />
     
     
    </div>
  );
}

export default App;
