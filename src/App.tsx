import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTabs from './NavTabs';
import Work from './Work';
import Education from './Education';
import Hobbys from './Hobbys';

function App() {
  const [position, setPosition] = React.useState('work')
  const onSelect = (eventKey: string | null) => {
      setPosition(eventKey ? eventKey : '')
  }

  const Content:React.FC = () => {
    switch(position) {
      case 'work': return <Work/>;
      case 'edu': return <Education/>;
      case 'hobby': return <Hobbys/>;
      default: return null
    }
  }

  return (
    <div className="App">
      <div className='Photo'>
        <img className='Img' src={process.env.PUBLIC_URL + '/photo.jpg'} />
        <div className='LastName'>Bizin</div>
        <div className='Name'>Semyon</div> 
        <div className='Age'>22 years old</div> 
      </div>
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
