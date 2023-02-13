import React, { useState } from 'react';
import { COffcanvas } from '@coreui/react'
import Dropdown from 'react-bootstrap/Dropdown';
import Chatbox from './Chatbox'


import { COffcanvasHeader,COffcanvasTitle, COffcanvasBody } from '@coreui/react'

import { CButton, CCloseButton } from '@coreui/react'



export default function Chats({ name, ...props }) {
    const [visible, setVisible] = useState(false)


  return (
    <>
    <CButton onClick={() => setVisible(true)}><img src='../images/chat.png' alt="chat" /></CButton>
    <COffcanvas backdrop={false} placement="start" scroll={true} visible={visible} onHide={() => setVisible(false)}>

      <COffcanvasHeader>
        <COffcanvasTitle>
            <div className='row'>
                <div className='col-sm-2'>
                <img src='../images/chat.png' alt="chat" onClick={() => setVisible(false)}  className="close"/>
                {/* <CCloseButton className="text-reset" onClick={() => setVisible(false)} /> */}
                </div>
                <div className='col-sm-8'>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                       General Chat
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Chat 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Chat 3</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Chat 4</Dropdown.Item>
                    </Dropdown.Menu>
                 </Dropdown>
                </div>
                <div className='col-sm-2'>
                <img src='../images/help.png' alt="chat" />
                </div>
            </div>
        </COffcanvasTitle>

        {/* <CCloseButton className="text-reset" onClick={() => setVisible(false)} /> */}
      </COffcanvasHeader>


      <COffcanvasBody>
        <Chatbox />
      </COffcanvasBody>
    </COffcanvas>
  </>
  )
}
