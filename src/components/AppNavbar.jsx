import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import cartIMG from '../assets/shopping-cart.svg'
import { useSelector } from 'react-redux';
export default function AppNavbar() {
  const cart = useSelector(state => state.Cart)
  console.log(cart.length);
  return (
    <Navbar fixed='top' bg="light" expand="lg">
      <Container>
        <Link to="/" className='navbar-brand'>E-Commerce</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="/products" className='nav-link'>Products</NavLink>
          </Nav>
          <Nav>
          <NavLink to="/cart" className='nav-link'>
              <img src={cartIMG} alt="cart" style={{ width: '20px', height: '20px' }} />
              ( {cart.length} )
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

