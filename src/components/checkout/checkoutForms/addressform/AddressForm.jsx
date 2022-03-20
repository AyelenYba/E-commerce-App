import React from 'react';
import { Container, Button, Form, Row, Nav, Col, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


import './AddressForm.css';

const AddressForm = ({ setStep }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); 
        setStep(1);
    };


    return (
        <Container id='address-form-container mb-5'>
            <h5>Shipping Details</h5>
            <Form 
            className='address-form d-flex align-items-center flex-column my-5' 
            style={{ height: '100vh'}}
            onSubmit={handleSubmit(onSubmit)}
            >
                <Row className='d-flex justify-content-center' style={{ width: '100%'}}>
                    <Col xs={12} sm={10} md={6} lg={4} className="mb-4">
                        <FormGroup as={Col}>
                            <FormLabel>First Name</FormLabel>
                            <FormControl
                            type='text'
                            name='firstname'
                            placeholder='First name'
                                {...register('firstname', {
                                    required: {
                                        value: true,
                                        message: 'The field is required'
                                    },
                                    pattern: {
                                        value: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
                                        message: 'Invalid first name'
                                    }
                                })}
                            >
                            </FormControl>
                        {errors.firstname && <span>{errors.firstname.message}</span>}
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={10} md={6} lg={4} className="mb-4">
                        <FormGroup as={Col}>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl
                            type='text'
                            name='lastname'
                            placeholder='Last name'
                                {...register('lastname', {
                                    required: {
                                        value: true,
                                        message: 'The field is required'
                                    },
                                    pattern: {
                                        value: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
                                        message: 'Invalid last name'
                                    }
                                })}
                            >
                            </FormControl>
                        </FormGroup>
                        {errors.lastname && <span>{errors.lastname.message}</span>}
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center' style={{ width: '100%'}}>
                    <Col xs={12} sm={10} md={6} lg={4} className="mb-4">
                        <FormGroup as={Col}>
                            <FormLabel>Email</FormLabel>
                            <FormControl
                            type='text'
                            name='email'
                            placeholder='Email'
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'The field is required'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                        message: 'Invalid email address'
                                    }
                                })}
                            >
                            </FormControl>
                        </FormGroup>
                        {errors.email && <span>{errors.email.message}</span>}
                    </Col>
                    <Col xs={12} sm={10} md={6} lg={4} className="mb-4">
                        <FormGroup as={Col}>
                            <FormLabel>Address</FormLabel>
                            <FormControl
                            type='text'
                            name='address'
                            placeholder='Address'
                                {...register('address', {
                                    required: {
                                        value: true,
                                        message: 'The field is required'
                                    },
                                    pattern: {
                                        value: /^[A-Za-z0-9éíóúýÁÉÍÓÚÝ\s]+$/g,
                                        message: 'Invalid address'
                                    }
                                })}
                            >
                            </FormControl>
                        </FormGroup>
                        {errors.address && <span>{errors.address.message}</span>}
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center' style={{ width: '100%'}}>
                    <Col xs={12} sm={10} md={6} lg={4} className="mb-4">
                        <FormGroup as={Col}>
                            <FormLabel>City</FormLabel>
                            <FormControl
                            type='text'
                            name='city'
                            placeholder='City'
                                {...register('city', {
                                    required: {
                                        value: true,
                                        message: 'The field is required'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z\u0080-\u024F]+(?:. |-| |')*([1-9a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/,
                                        message: 'Invalid city'
                                    }
                                })}
                            >
                            </FormControl>
                        </FormGroup>
                        {errors.city && <span>{errors.city.message}</span>}
                    </Col>
                    <Col xs={12} sm={10} md={6} lg={4} className="mb-4">
                        <FormGroup as={Col}>
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl
                            type='text'
                            name='postalcode'
                            placeholder='Postal Code'
                                {...register('postalcode', {
                                    required: {
                                        value: true,
                                        message: 'The field is required'
                                    },
                                    pattern: {
                                        value: /^[0-9a-zA-Z]+$/,
                                        message: 'Invalid postal code'
                                    }
                                })}
                            >
                            </FormControl>
                        </FormGroup>
                        {errors.postalcode && <span>{errors.postalcode.message}</span>}
                    </Col>
                </Row>
                <div className='address-form-footer my-4'>
                    <Button className='back-btn'>    
                        <Nav.Link as={Link} to='/cart' className='backtocart-btn'>
                                <span>Back to cart</span>
                        </Nav.Link>
                    </Button>
                    <Button className='next-btn ' type="submit" >
                        Next
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default AddressForm;