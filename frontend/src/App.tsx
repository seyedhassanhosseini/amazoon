import { sampleProducts } from './data';
import { Product } from "./types/Product";
import { Container, Navbar, Nav, Row, Col, Button } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { Store } from './Store';

  function App() {

    const {state: {mode}, dispatch} = useContext(Store);

    useEffect( () => {
      document.body.setAttribute("data-bs-theme", mode)
    },[mode]);

    const switchModeHandler = () => {
       dispatch({type: "SWITCH_MODE"})
    }

    return (
      <div className="d-flex flex-column vh-100">
        <header>
          <Navbar  expand="lg">
            <Container>
              <Navbar.Brand>tsamazona</Navbar.Brand>
            </Container>
            <Nav>
              <Button variant={mode} onClick={switchModeHandler}>
                <i className={ mode === "light" ? "fa fa-sun" : "fa fa-moon"}></i>
              </Button>
              <a href='/cart' className='nav-link'>Cart</a>
              <a href='/signin' className='nav-link'>Sign In</a>

            </Nav>
          </Navbar>
        </header>
        <main>
         <Container className="mt-3"></Container>
         <Outlet/>

        </main>
        
      </div>
    )
  }
export default App
