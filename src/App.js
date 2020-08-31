import React from 'react';
import './styles/App.scss';
// Logo
import logo from './images/Logo.svg';
// Import footer
import Footer from './Components/Footer.js';
// Footer styling
import './styles/footer.scss';

function App() {
  return (
    <div className="app">
      {/* Logo */}
      <img className="logo" src={logo} width="139px" height="116px"></img>
      {/* Title */}
      <p className="hello">Hello my name is Yoni Kosiner</p>
      <h3 className="list">Developer, Designer,Student</h3>
      <Footer />
    </div>
  );
}

export default App;
