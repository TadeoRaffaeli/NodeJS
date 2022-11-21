import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartPlus } from 'react-icons/fa';


const CustomNavbar = () => {
    return (
        <header>
        <Navbar id='navi'>
      <Container id='bob'>
        <img src={process.env.PUBLIC_URL + '/logo.png'} id='imgLogo' alt='Logo'/>
        <Navbar.Brand className='filtro1'>Proteinas</Navbar.Brand>
        <Navbar.Brand className='filtro2'>Creatina</Navbar.Brand>
        <Navbar.Brand className='filtro3'>Vitaminas</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='signIn'>
           <a  href="#login">Sign In</a>
          </Navbar.Text>
          <Navbar.Text className='login'>
           <a  href="#login">Register</a>
          </Navbar.Text>
          
        </Navbar.Collapse>
        <FaCartPlus className='iconoCarro'/>
      </Container>
    </Navbar>
        </header>
    )
}

export default CustomNavbar;