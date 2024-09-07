import { sampleProducts } from './data';
import { Product } from "./types/Product";
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom'




  
  function App() {
    return (
      <div className="d-flex flex-column vh-100">
        <header>seyed</header>
        <main>
         <Container className="mt-3"></Container>
         <Outlet/>

        </main>
        
      </div>
    )
  }
export default App
