import React from 'react'
import PropTypes from 'prop-types';
export default function Navbar(props) {
  return (
    <div style={{zIndex:'499', position:'fixed', backgroundColor:'#1F1C1C'}}>
      <table><tr>
            <td> 
            <img style={{width:'170px'}} src='My project-1.png' alt='SK'/></td>
            <td><h1 style={{color:'wheat'}}>{props.title}</h1></td>
            <td><nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{width:'100%', height:100, marginLeft:'20%'}}>  
  <div className="container-fluid">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          {//<a className="nav-link disabled">Disabled</a>
          }
        </li>
      </ul>
    </div>
  </div>
</nav>
</td>
</tr></table>

    </div>
  )
}

Navbar.propTypes={
    title: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title: 'Shashank'
};