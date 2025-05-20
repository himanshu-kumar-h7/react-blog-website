import React, {useState, useEffect, useCallback, useMemo} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import './NavigationBar.css'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import App from "../../App.js"

function NavigationBar() {
  let location = useLocation()
  let pathName = location.pathname;

  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => setIsOpen(po => !po), [])

  return (
    <div className="navBar1" id="Navigationid" style={{display: 'flex', flexDirection: 'column', justifyContent:'space-around'}}> 
      <Navbar
        className=" d-flex justify-content-fixed"
        expand="sm"
        
      >

        
          <NavItem >
          <Link to="/" className="text-white" id="sdws23" >
            🌞 Accuweather
          </Link>
        </NavItem>
        
        {/* <NavLink className=" text-white" to="/">
          {!isNaN(pathName.split('/')[1]) ? 'Authors' : pathName.split('/')[1]}
        </NavLink> */}
        <NavbarToggler onClick={toggle} style={{width: 'auto'}} />
        <Collapse
          className="collapse1"
          isOpen={isOpen}
          navbar
          style={{
            color: 'white',
            width: 'auto',
          }}
        >
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" onClick={toggle}>
                <p
                  className={`m-2 ${
                    !!!pathName.split('/')[1] ? 'text-white' : 'text-secondary '
                  }`}
                >
                  {' '}
                  Authors
                </p>
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/MostLikedPost" onClick={toggle}>
                <p
                  className={`m-2 ${
                    pathName.split('/')[1] === 'MostLikedPost'
                      ? 'text-white'
                      : 'text-secondary'
                  }`}
                >
                  {' '}
                  ❤️
                </p>
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/MostCommentPost" onClick={toggle}>
                <p
                  className={` m-2 ${
                    pathName.split('/')[1] === 'MostCommentPost'
                      ? 'text-white'
                      : 'text-secondary'
                  }`}
                >
                  {' '}
                  💬
                </p>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
