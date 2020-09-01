import React from 'react';
import './styles/App.scss';
// Logo
import logo from './images/Logo.svg';
// Menu
import menu from './Components/Menu';
// Menu scss
import './styles/menu.scss';
// Social icons
import instagram from './images/instagram.svg';
import twitter from './images/twitter.svg';
import email from './images/email.svg';
import git from './images/github.svg'
// Image of me
import me from './images/me.jpg'
// Import footer
import Footer from './Components/Footer.js';
// Footer styling
import './styles/footer.scss';

function App() {
  return (
    <div className="app">
      <menu />
      {/* Logo */}
      <img alt="" className="logo" src={logo} width="139px" height="116px"></img>
      {/* Image of me */}
      <img alt="" src={me} className="me" width="458.5px" height="720px"></img>
      {/* Title */}
      <p className="hello">Hello my name is Yoni Kosiner</p>
      <h3 className="list">Developer, Designer,Student</h3>
      {/* Social */}
      <div className="social">
        <a href="https://www.instagram.com/kosiner.codes" target=" _blank">
          <img alt="" className="image" src={instagram}></img>
        </a>
        <a href="https://twitter.com/KosinerYoni" target=" _blank">
          <img alt="" className="image1" src={twitter}></img>
        </a>
        <a href="mailto:yoni@kosiner.co.uk?subject=Yoni%20Kosiner%20Inquiry" target=" _blank">
          <img alt="" className="image2" src={email}></img>
        </a>
        <a href="https://github.com/yonikosiner" target=" _blank">
          <img alt="" className="image3" src={git}></img>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;