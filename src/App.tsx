import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar";
import Content from "./Components/Content";
import Map from "./Components/Map";

function App() {

  return (
    <div className="app">
        <div className={"container"}>
            <NavBar/>
            <Content/>
            <Map/>
        </div>
    </div>
  );
}

export default App;
