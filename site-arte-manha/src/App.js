import "./App.css";
import NavigationBar from "./header/navigationBar";
import AppRouter from "./routes";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <NavigationBar></NavigationBar>
        </header>
      </div>
      <AppRouter />
    </>
  );
}

export default App;
