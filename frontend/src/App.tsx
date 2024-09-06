import { sampleProducts } from './data';
import { Product } from "./types/Product";
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';


const showData = (product:Product) => {
  return (
    <li key ={`${product.price} + id`}>
        <img className='product-image' src={product.image}></img>
        <p>{product.name}</p>
        <h2>{product.price}</h2>
    </li>
  )}
  //

  
  function App() {
    return (
      <div className="d-flex flex-column vh-100">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand>tsamazona</Navbar.Brand>
            </Container>
            <Nav>
              <a href="/cart" className="nav-link">
                Cart
              </a>
              <a href="/signin" className="nav-link">
                Sign In
              </a>
            </Nav>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Row>
              {sampleProducts.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <h2>{product.name}</h2>
                  <p>${product.price}</p>
                </Col>
              ))}
            </Row>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    )
  }
export default App
