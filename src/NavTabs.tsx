import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Nav} from 'react-bootstrap'

type Props = {
    onSelected(eventKey: string | null): void
}

const NavTabs:React.FC<Props> = (props) => {
    return (
        <Nav className='Nav' justify variant="pills" defaultActiveKey="work" 
        onSelect={props.onSelected}>
          <Nav.Item>
            <Nav.Link className='NavLink' eventKey="work">Places of work</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='NavLink' eventKey="edu">Education</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='NavLink' eventKey="hobby">Hobbys</Nav.Link>
          </Nav.Item>
        </Nav>
    )
}

export default NavTabs