import React from 'react';
import Navbar from './components/Navbar/index.js';
import Welcome from './components/Welcome/index.js';
import Footer from './components/Footer/index.js';
import Experience from './components/Experience/index.js';
import Bio from './components/Bio/index.js'
import '../src/style.css'

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div className='uniform' >
      <Navbar />
      <div id='midBg' >
      <Welcome />
      <Bio />
      <Experience />
      </div>
      <Footer />
    </div>
  );
}

export default App;
