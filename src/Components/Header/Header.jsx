import React, { Fragment } from 'react'
import Chat from './Chat'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Header() {
  return (
    <Fragment>
        <div className='container-fluid Header'>
            <div className='row'>
                <div className='col-sm-3 logo'>
                    <img src='../images/logo.png' alt='img'/>
                </div>
                <div className='col-sm-3 mytext'>
                    <p>Center the cashier Every page</p>
                </div>
                <div className='col-sm-1 cashier'>
                    <img src='../images/coins.png' alt="cc" />
                    <span className='price'>0.00 </span>
                    <span className='own'>Cashier</span>
                </div>
                <div className='col-sm-1 level'>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                       Levels
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Level 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Level 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Level 3</Dropdown.Item>
                    </Dropdown.Menu>
                 </Dropdown>
                </div>

                <div className='col-sm-2 setting'>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <img src='../images/setting.png' alt="set" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                 </Dropdown>
                </div>
                <div className='col-sm-2 chat'>
                <Chat/>
                </div>
            </div>

            
        </div>
    </Fragment>
  )
}
