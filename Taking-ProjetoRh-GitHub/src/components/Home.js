import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import Images from './images';


export default function Home() {


	return (
		<>

			<Navbar color="navbar navbar-dark bg-dark">
				<NavbarBrand tag={Link} to="/Home">Home</NavbarBrand>
				<NavbarBrand tag={Link} to="/Cadastro">Cadastro de currículo</NavbarBrand>
				<NavbarBrand tag={Link} to="/RH">RH</NavbarBrand>
				<Nav className="me-auto" navbar>

				</Nav>

			</Navbar>

			<div>
				<img className='TK' src="/LogoTK.png" alt='Imgem da taking' />
			</div>
		</>

	);
}