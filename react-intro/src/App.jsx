// src/App.jsx
import './App.css';
import logo from "./assets/ironhack-logo-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import menu from "./assets/menu-top-xs.png";

function App() {
  return (
    <div className="App">
      <main>

        <nav>
        <img src={logo} alt="logo" />
        <img src={menu}  className="menu" alt="menu" />
        </nav>

        <section className="content">
          <div>
            <h1>Say hello to</h1><h1> ReactJS</h1>
            <div className="text">
              <p>You will learn how to use</p>
              <p>the most popular frontend library,</p>
              <p>and become a super Ninja developer.</p>
            </div>
            <button>Awesome!</button>
          </div>
        </section>
        
      </main>
    </div>
  );
}

export default App;