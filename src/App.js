import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Service from './component/Service';
import Location from './component/Location';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Service />
     {/* <Location/> */}
     <Footer/>
    </div>
  );
}
 
export default App;
