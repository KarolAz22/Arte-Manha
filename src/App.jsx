import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import "./css/global.css"
import AppRouter from "./routes"

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
