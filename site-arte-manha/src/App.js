import './App.css';
import NavigationBar from './header/navigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/contactUs';


function App() {
  return (
    <Router>
        <div className="App">
          <header className="App-header">
          <NavigationBar></NavigationBar>
          </header>
        </div>
          <Routes>
              <Route path="/sobre-nos" element={<AboutUs/>} />
          </Routes>
          <Routes>
              <Route path="/fale-conosco" element={<ContactUs/>} />
          </Routes>
        
        
    
  </Router>
  );
}

export default App;
