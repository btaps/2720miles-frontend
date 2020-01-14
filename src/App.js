import React from 'react';
import './App.css'

import Header from './containers/Header'
import Footer from './containers/Footer'

function App() {
  return (
    <div >
        <Header 
	  className="container"
	/> 
        <Footer
	  className="container"
	/>
    </div>
  );
}

export default App;
