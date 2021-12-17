import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap'
import NavTabs from './NavTabs';

function App() {
  const [position, setPosition] = React.useState('work')
  const onSelect = (eventKey: string | null) => {
      setPosition(eventKey ? eventKey : '')
  }

  const Content:React.FC = () => {
    switch(position) {
        case 'work': return <div>1</div>;
        case 'edu': return <div>2</div>;
        case 'hobby': return <div>3</div>;
        default: return null
      }
  }

  return (
    <div className="App">
      <div className='Photo'></div>
      <div className='Info'>
        <NavTabs onSelected={onSelect}/>
        <div className='Content'>
          <Content/>
        </div>
      </div>
    </div>
  );
}

export default App;
