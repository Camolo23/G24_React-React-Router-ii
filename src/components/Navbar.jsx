import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBS from 'react-bootstrap/Navbar';

function Navbar() {

    const setActiveClass = ({ isActive }) => (
        isActive ? "active" : "inactive"
    )

    return (
        <NavbarBS bg="secondary" variant="dark">
            <Container>
                <NavbarBS.Brand href="/">PokeStats</NavbarBS.Brand>
                <Nav className="flex-end">
                    <NavLink className={ setActiveClass } to="/" >Home</NavLink>
                    <NavLink className={ setActiveClass } to="/pokemones">Pokemones</NavLink>
                </Nav>
            </Container>
        </NavbarBS>
    );
}

export default Navbar;