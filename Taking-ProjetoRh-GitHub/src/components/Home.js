import { Link} from 'react-router-dom';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand} from 'reactstrap';




export default function Home(){


    return( 
        <>
        <div>  
           
            <Navbar className="barborda">
              
                    <img  className='logtk' src="/TK.png" alt="Logo da taking" />  
                <Nav className="me-auto" >
                    <NavbarBrand  tag={Link} to="/">Home</NavbarBrand>
                    <NavItem>
                    <NavLink tag={Link} to="/Cadastro">Cadastro de currículo</NavLink>
                    <NavLink tag={Link} to="/RH">Recursos Humanos</NavLink>
                    </NavItem>
                </Nav>
                
            </Navbar>
        </div>

            <div>
                <img className='TK' src="/LogoTK.png" alt='Imgem da taking'/>

            </div>
        </>
        
    );
}