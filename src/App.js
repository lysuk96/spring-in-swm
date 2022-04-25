/* eslint-disable */
import React, {useState, useEffect} from 'react';

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './App.css';

//component
import Data from './dummy/UserDummy.js';
import Members from './component/Members.js'
import MembersDetail from './component/MembersDetail.js'
import Home from './component/Home.js'
import RollSheet from './component/RollSheet.js'

import {Link, Redirect, Route, Switch} from 'react-router-dom';

import { withCookies, useCookies } from 'react-cookie';

function App() {

  let [members, setMembers] = useState(Data);
  let [cookies, removeCookie] = useCookies([ 'user' ]);
  let [hasCookie, setHasCookie] = useState(false);

  useEffect(() => {
    if (console.user && cookies.user !== 'undefined') {
      setHasCookie(true);
    }
  }, [cookies]);

  return(
    //네비게이션 바
    <div className="App">

      {
      !hasCookie ? <Redirect to="/" /> : <Redirect to="/members" />
      }

      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">우연히, 봄</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/members">My Friends</Nav.Link>
          <Nav.Link as={Link} to="/roll_sheet">Roll-Sheet</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/members">
          <Members members={members}
            hasCookie={hasCookie}
            setHasCookie={setHasCookie}
            removeCookie={() => {
              removeCookie('user');
              setHasCookie(false); 
            }} />
        </Route>

        <Route exact path="/members/:id">
          <MembersDetail/>
        </Route>

        <Route path="/roll_sheet">
          <RollSheet/>
        </Route>
        <Route path="/about">
          <div>개발자 관련</div>
        </Route>
    </Switch>
    </div>
  )
}

export default App;
