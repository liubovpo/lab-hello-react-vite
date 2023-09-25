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
      <section class="features">
          <div class="feature"><img src={icon1}/><h2>Declarative</h2><div class="feature-text"><p>React makes it</p><p>painless to create</p><p>interactive UIs.</p></div></div>
          <div class="feature"><img src={icon2}/><h2>Components</h2><div class="feature-text"><p>React makes it</p><p>painless to create</p><p>interactive UIs.</p></div></div>
          <div class="feature"><img src={icon3}/><h2>Single-Way</h2><div class="feature-text"><p>React makes it</p><p>painless to create</p><p>interactive UIs.</p></div></div>
          <div class="feature"><img src={icon4}/><h2>JSX</h2><div class="feature-text"><p>React makes it</p><p>painless to create</p><p>interactive UIs.</p></div></div>
        </section>
    </div>
  );
}

export default App;