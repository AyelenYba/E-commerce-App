import React from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from 'formik';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

import './CreditCardForm.css';

const CreditCardForm = ({ setStep, refreshCart }) => {

    const onClickHandle = () => {
        setStep(0);
    }

    const regExpCardNumber = /^4[0-9]{12}(?:[0-9]{3})?$/;  //Only visa 4155279860457”
    const regExpCardName = /^((?:[A-Za-z]+ ?){1,3})$/
    const regExpExpiry = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    const regExpCvc = /\d{3}/;


    const validationSchema = Yup.object().shape({
        cardnumber: Yup.string()
        .matches(regExpCardNumber)
        .required('* The field is required'),
        name: Yup.string()
        .max(24, "Can't be longer than 24 characters")
        .matches(regExpCardName)
        .required('* The field is required'),
        expiry: Yup.string()
        .required('* The field is required')
        .matches(regExpExpiry),
        cvc: Yup.string()
        .matches(regExpCvc)
        .required('* The field is required'),
    });
    
    return (
        <Formik 
        initialValues={{ cardnumber:"", name:"", expiry:"", cvc:""}} 
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting, resetForm}) => {
            setSubmitting(true); //Button disabled while submitting
            refreshCart();
            resetForm(); //Resets form after submission

            Swal.fire({ //Alert
                icon: 'success',
                title: 'Thank you!',
                text: 'Your order was successfully submitted',
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonText:'Continue shopping',
                confirmButtonAriaLabel: 'Back home',
                cancelButtonText: 'Back to Homepage',
                cancelButtonAriaLabel: 'Back to Homepage'
            }).then((result) => {
                if(result.isConfirmed) {
                    window.location.href= '/products'
                } 
                window.location.href='/'
            });

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
            <Form className='d-flex flex-column  my-5' onSubmit={handleSubmit}>
                <Col className='d-flex align-items-center flex-column mx-auto payment-form-container'>
                    <Row >
                        <Col>
                            <Form.Group controlId="formCardnumber">
                            <Form.Label></Form.Label>
                            <Form.Control
                                type="text"
                                name="cardnumber"
                                placeholder="Card Number"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.cardnumber}
                                className={touched.cardnumber && errors.cardnumber ? "error" : null}
                                />
                                {touched.cardnumber && errors.cardnumber && <span className="error-message">Invalid card number</span>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formName">
                            <Form.Label></Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                className={touched.name && errors.name ? "error" : null}
                                />
                                {touched.name && errors.name && <span className="error-message">Invalid name</span>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formExpiry">
                            <Form.Label></Form.Label>
                            <Form.Control
                                type="text"
                                name="expiry"
                                placeholder="MM/YY"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.expiry}
                                className={touched.expiry && errors.expiry ? "error" : null}
                                />
                                {touched.expiry && errors.expiry && <span className="error-message">Invalid expiry date</span>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formCvc">
                            <Form.Label></Form.Label>
                            <Form.Control
                                type="text"
                                name="cvc"
                                placeholder="cvc"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.cvc}
                                className={touched.cvc && errors.cvc ? "error" : null}
                                />
                                {touched.cvc && errors.cvc && <span className="error-message">Invalid code</span>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className='creditcardform-footer my-5'>
                        <Button className='back-btn' onClick={onClickHandle}>    
                            <span>Back</span>
                        </Button>
                        <Button className='next-btn' type="submit" disabled={isSubmitting}>
                            Next
                        </Button>
                    </div>
                </Col>
            </Form>
            )}
        </Formik>
    )
}

export default CreditCardForm;