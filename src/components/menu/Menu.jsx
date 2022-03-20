import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

import './Menu.css';

const Menu = ({ totalItems }) => {

    const pagesData = [
        { id:'home', name: "Home", path: "/"},
        { id:'products', name: "Products", path: "/products"},
    ];

    return (
        <Navbar collapseOnSelect bg='dark' variant='dark' expand='lg' fixed> {/* O fixed='top' */}
            <Container >
                <NavbarBrand >
                    <Nav.Link as={Link} to='/'>
                        E-commerce
                    </Nav.Link>
                </NavbarBrand>
                <NavbarToggle size='sm'/> {/* Burger Menu */}
                <NavbarCollapse >
                    <Nav >
                        {pagesData.map(({name, path}, i) => {
                            return(
                                <div key={i}>
                                    <Nav.Link as={Link} to={path} eventKey={i}>{name}</Nav.Link>
                                </div>
                            )
                        })} 
                        <Nav.Link as={Link} to='/cart' className='cart-btn'>
                            <i className="bi bi-cart-fill">
                                <span className='total-items'>
                                    {totalItems}
                                </span>
                            </i>
                        </Nav.Link>
                    </Nav>
                </NavbarCollapse>               
            </Container>
        </Navbar>
    )
}

export default Menu;