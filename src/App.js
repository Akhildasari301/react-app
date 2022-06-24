import './App.css';
import Header from './components/Header'
import Home from './Views/Home'
import Footer from './components/Footer'
import About from './Views/About'
import {BrowserRouter as Router ,
Routes,
Route,
} from 'react-router-dom';
import ContactUs from './Views/ContactUs';


function App() {
  return (
    <div className="App bg-gray">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
