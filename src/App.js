import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';
// Import footer
import Footer from './Components/Footer.js';
// Footer styling
import './styles/footer.scss';

function App() {
  return (
    <div>
      <h1 className="title">Blog</h1>
      <Footer />
    </div>
  );
}

export default App;
