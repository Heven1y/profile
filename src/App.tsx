import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar";
import Content from "./Components/Content";
import Map from "./Components/Map";
import Footer from "./Components/Footer";

function App() {

  return (
    <div className="app">
        <div className={"container"}>
            <NavBar/>
            <Content/>
            <Map/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
