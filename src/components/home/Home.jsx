import React from 'react';
import { Container, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Home.css';


const Home = () => {
    return (
        <Container className='main-container d-flex justify-content-center mt-5' >
            <Col className='shopnow-container d-flex justify-content-center align-items-center' xs={12} >
                <button type='button' className='shopnow-btn'><Link to='/products'>Shop Now  <i className="bi bi-bag-fill "></i></Link></button>
            </Col>
        </Container>
    )
}

export default Home;