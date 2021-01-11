import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import TechStack from "./Components/TechStack";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="App">
          <Header />
          <Home />
          <TechStack />
          <Portfolio />

          
    </div>
  );
}

export default App;
