import React from 'react';
import { Container, Button, Form, Row, Nav, Col, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import './AddressForm.css';

const AddressForm = ({ setStep }) => {

    const regExpFirstName = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    const regExpLastName = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    const regExpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const regExpAddress = /^[A-Za-z0-9éíóúýÁÉÍÓÚÝ\s]+$/;
    const regExpCity = /^[a-zA-Z\u0080-\u024F]+(?:. |-| |')*([1-9a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
    const regExpPostalCode = /^[0-9a-zA-Z]+$/;

    const validationSchema = Yup.object().shape({
        firstname: Yup.string()
        .min(3, 'Must be at least 3 characters long')
        .matches(regExpFirstName, 'Invalid first name')
        .required('* The field is required'),
        lastname: Yup.string()
        .min(3, 'Must be at least 3 characters long')
        .matches(regExpLastName, 'Invalid last name')
        .required('* The field is required'),
        email: Yup.string()
        .required('* The field is required')
        .matches(regExpEmail, 'Invalid email'),
        address: Yup.string()
        .matches(regExpAddress, 'Invalid address')
        .required('* The field is required'),
        city: Yup.string()
        .matches(regExpCity, 'Invalid city')
        .required('* The field is required'),
        postalcode: Yup.string()
        .matches(regExpPostalCode, 'Invalid postal code')
        .required('* The field is required'),
    });
    

    return (
        <Container id='address-form-container mb-5'>
            <h5>Shipping Details</h5>
            <Formik 
            initialValues={{ firstname:"", lastname:"", email:"", address:"", city:"", postalcode:""}} 
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true); //Button disabled while submitting
                setStep(1);
                // Sets setSubmitting to false after form is reset
                setSubmitting(false);
        }}>
            {( {values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting }) => (
            <Form 
            className='address-form d-flex align-items-center flex-column my-5' 
            style={{ height: '100vh'}}
            onSubmit={handleSubmit}
            >
                <Row className='d-flex justify-content-center' style={{ width: '100%'}}>
                    <Col xs={12} sm={10} md={6} lg={4} className="mb-4">
                        <FormGroup as={Col} controlId='formFirstName'>
                            <FormLabel>First Name</FormLabel>
                            <FormControl
                            type='text'
                            name='firstname'
                            placeholder='First name'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstname}
                            className={touched.firstname && errors.firstname ? "error" : null}
                            >
                            </FormControl>
                            {touched.firstname && errors.firstname && <span className="error-message">{errors.firstname}</span>}
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={10} md={6} lg={4} className="mb-4">
                        <FormGroup as={Col} controlId='formLastName'>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl
                            type='text'
                            name='lastname'
                            placeholder='Last name'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastname}
                            className={touched.lastname && errors.lastname ? "error" : null}
                            >
                            </FormControl>
                        </FormGroup>
                        {touched.lastname && errors.lastname && <span className="error-message">{errors.lastname}</span>}
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center' style={{ width: '100%'}}>
                    <Col xs={12} sm={10} md={6} lg={4} className="mb-4">
                        <FormGroup as={Col} controlId='formEmail'>
                            <FormLabel>Email</FormLabel>
                            <FormControl
                            type='text'
                            name='email'
                            placeholder='Email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            className={touched.email && errors.email ? "error" : null}
                            >
                            </FormControl>
                        </FormGroup>
                        {touched.email && errors.email && <span className="error-message">{errors.email}</span>}
                    </Col>
                    <Col xs={12} sm={10} md={6} lg={4} className="mb-4">
                        <FormGroup as={Col} controlId='formAddress'>
                            <FormLabel>Address</FormLabel>
                            <FormControl
                            type='text'
                            name='address'
                            placeholder='Address'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address}
                            className={touched.address && errors.address ? "error" : null}
                            >
                            </FormControl>
                        </FormGroup>
                        {touched.address && errors.address && <span className="error-message">{errors.address}</span>}
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center' style={{ width: '100%'}}>
                    <Col xs={12} sm={10} md={6} lg={4} className="mb-4">
                        <FormGroup as={Col} controlId='formCity'>
                            <FormLabel>City</FormLabel>
                            <FormControl
                            type='text'
                            name='city'
                            placeholder='City'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.city}
                            className={touched.city && errors.city ? "error" : null}
                            >
                            </FormControl>
                        </FormGroup>
                        {touched.city && errors.city && <span className="error-message">{errors.city}</span>}
                    </Col>
                    <Col xs={12} sm={10} md={6} lg={4} className="mb-4">
                        <FormGroup as={Col} controlId='formPostalCode'>
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl
                            type='text'
                            name='postalcode'
                            placeholder='Postal Code'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.postalcode}
                            className={touched.postalcode && errors.postalcode ? "error" : null}
                        >
                            </FormControl>
                        </FormGroup>
                        {touched.postalcode && errors.postalcode && <span className="error-message">{errors.postalcode}</span>}
                    </Col>
                </Row>
                <div className='address-form-footer my-4'>
                    <Button className='back-btn'>    
                        <Nav.Link as={Link} to='/cart' className='backtocart-btn'>
                                <span>Back to cart</span>
                        </Nav.Link>
                    </Button>
                    <Button className='next-btn ' type='submit' disabled={isSubmitting} >
                        Next
                    </Button>
                </div>
            </Form>
            )}
        </Formik>
        </Container>
    );
};

export default AddressForm;