import React from 'react';
import { Container } from 'react-bootstrap';

import OrderReview from '../orderreview/OrderReview';
import CreditCardForm from './CreditCardForm';

const PaymentForm = ({ checkoutToken, setStep, refreshCart }) => {

    return (
        <Container>
            <OrderReview checkoutToken={checkoutToken}/>

            <h5 className='my-3' style={{ textAlign: 'center' }}>Payment details</h5>
            <CreditCardForm setStep={setStep} refreshCart={refreshCart}/>
        </Container>
    );
};

export default PaymentForm;