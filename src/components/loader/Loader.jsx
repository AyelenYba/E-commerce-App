import React from 'react';
import { Spinner, Container } from 'react-bootstrap';

const Loader = () => {
    return (
        <Container className='d-flex align-items-center flex-column justify-content-flex-start my-5'>
            <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
        </Container>
    );
};

export default Loader;