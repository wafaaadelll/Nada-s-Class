import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Scrolling from './Scrolling';


function App() {
  return (
    <>
    <Scrolling>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    <Footer/>
    </Scrolling>
    </>
  );
}

export default App;
