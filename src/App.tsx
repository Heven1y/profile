import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar";
import Content from "./Components/Content";

function App() {

  return (
    <div className="app">
        <div className={"container"}>
            <NavBar/>
            <Content/>
        </div>
    </div>
  );
}

export default App;
