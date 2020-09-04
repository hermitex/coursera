import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>
              Ristorante con Fusion
          </NavbarBrand>
          </div>
        </Navbar>
        <Menu></Menu>
      </div>
    );
  }
}

export default App;
