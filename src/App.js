import './App.css';
import Nav_Links from './Nav_Links';
import { Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Nav_Links />
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
     </Routes>
    </div>
  );
}
 
export default App;
