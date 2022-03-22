import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container style={{marginTop: '7.5em'}}>
            <h1>Error 404</h1>
            <h4>The page doesn't exist.</h4>
            <br/>
            <Link to='/'>Go back home</Link>
        </Container>
    );
};

export default NotFound;