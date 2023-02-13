import React, { Fragment } from 'react'


export default function Nav() {
  return (
    <Fragment>
        <div className='menu'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#"><img src='../images/home.png' alt='list'/>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#"><img src='../images/duel.png' alt='list'/>Duel</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#"><img src='../images/poker.png' alt='list'/>Poker</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#"><img src='../images/chip.png' alt='list'/>Loot</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#"><img src='../images/wheel.png' alt='list'/>Wheel</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#"><img src='../images/flag.png' alt='list'/>Race</a>
        </li>
       <span className='suggestions'>

        
       <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#"><img src='../images/cost.png' alt='list'/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#"><img src='../images/link.png' alt='list'/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#"><img src='../images/question.png' alt='list'/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#"><img src='../images/profile.png' alt='list'/></a>
        </li>

       </span>
      </ul>



       

    </div>
  </div>
</nav>
        </div>
    </Fragment>
  )
}
