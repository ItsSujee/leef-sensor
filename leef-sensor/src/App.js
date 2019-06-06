import React from 'react';
import map from './map.png';
import logo from './logo.jpg'
import './App.css';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink, Row, Col} from 'reactstrap';
import {Progress, Table} from 'reactstrap';

function App() {
  return (
    <div className="App">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Monitor Mode</NavbarBrand>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink>RCH</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
        <Row>
          <Col>
            <br/>
            <img src={logo} width='150px' alt='Leef Sensor Logo'/>
            <h1>Leef Sensor</h1>

            <br/>
            <br/>

            <img src={map} width='800px' alt='map of RCH'/>
            <br/>

            <h3 className="text-center">Efficiency: 76%</h3>
            <Progress value="76"/>

            <br/>

            <Table>
              <thead>
                <tr>
                  <th>Room #</th>
                  <th>Temperature (Celcius)</th>
                  <th>Power (Watts)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">305</th>
                  <td>21.34</td>
                  <td>3000</td>
                </tr>
                <tr>
                  <th scope="row">307</th>
                  <td>22.23</td>
                  <td>2300</td>
                </tr>
                <tr>
                  <th scope="row">309</th>
                  <td>21.23</td>
                  <td>4300</td>
                </tr>
                <tr>
                  <th scope="row">312</th>
                  <td>21.89</td>
                  <td>2900</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
    </div>
  );
}

export default App;
