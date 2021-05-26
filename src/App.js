
import React from 'react' ;
import Rows from './component/Rows';
import Banner from './component/Banner/Banner';
import Nav from './component/Nav/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Rows />
            
    </div>
  );
}

export default App;
