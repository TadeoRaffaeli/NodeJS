import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { FaCartPlus } from 'react-icons/fa';


const CustomNavbar = () => {
    return (
        <header>
        <Navbar id='navi'>
      <Container id='bob'>
        <Link to='/'><img src={process.env.PUBLIC_URL + '/logo.png'} id='imgLogo' alt='Logo' /></Link>
        <Navbar.Brand className='filtro1'><Link to='/cat/proteina' style ={{color: 'whitesmoke'}}>Proteinas</Link></Navbar.Brand>
        <Navbar.Brand className='filtro2'><Link to='/cat/creatina' style ={{color: 'whitesmoke'}}>Creatina</Link></Navbar.Brand>
        <Navbar.Brand className='filtro3'><Link to='/cat/vitamina' style ={{color: 'whitesmoke'}}>Vitaminas</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='signIn'>
           <a  style ={{color: 'whitesmoke'}} href="#login">Sign In</a>
          </Navbar.Text>
          <Navbar.Text className='login'>
           <a  style ={{color: 'whitesmoke'}} href="#login">Register</a>
          </Navbar.Text>
          
        </Navbar.Collapse>
        <Link className='iconoCarro' style={{color: 'white'}} to='/cart' ><FaCartPlus style ={{fontSize: '2.5rem'}}/><CartWidget /></Link>
      </Container>
    </Navbar>
        </header>
    )
}

export default CustomNavbar;