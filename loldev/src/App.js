import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import New from "./components/New";
import Dev from "./components/Dev";
import Chat from "./components/Chat";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Profileedt from "./components/Profileedt";

function App() {
  const [selectedComponent, setSelectedComponent] = useState(<Home />);

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="main" style={{ filter: darkMode ? 'invert(100%)' : 'none' }}>
      <div className="navbar">
        <div className="company">
          <img src="https://picsum.photos/100/100" className="pfp" alt="1" />
          <h2 className="hed">Vonty</h2>
        </div>
        <div className="all-btn-user">
          <button onClick={handleToggleDarkMode}>Toggle dark mode</button>
          <div className="user">
            <img src="https://picsum.photos/100/100" className="pfp" alt="1" />
          </div>
        </div>
      </div>

      <div className="page-changer">
        <div className="all-btn">
          <button
            className="menu-btn"
            onClick={() => handleButtonClick(<Home />)}
          >
            Home
          </button>
          <button
            className="menu-btn"
            onClick={() => handleButtonClick(<New />)}
          >
            New
          </button>
          <button
            className="menu-btn"
            onClick={() => handleButtonClick(<Dev />)}
          >
            Dev
          </button>
          <button
            className="menu-btn"
            onClick={() => handleButtonClick(<Profileedt />)}
          >
            Info
          </button>
          <button
            className="menu-btn"
            onClick={() => handleButtonClick(<Chat />)}
          >
            Chat
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="leftcontent">
          <Profile />
        </div>
        
        <div className="rightcontent">{selectedComponent}</div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
