import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { commerce } from '../../commerce/commerce';
import Loader from '../loader/Loader';

import AddressForm from './checkoutForms/addressform/AddressForm';
import PaymentForm from './checkoutForms/paymentform/PaymentForm';


const Checkout = ({ cart, refreshCart }) => {

    const [step, setStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        generateToken();
    }, []);

    const generateToken = async () => {
        setLoading(true);
        try {
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'});
            setCheckoutToken(token);
        } catch (error) {
            console.log('There was an error in generating a token', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container className='my-5'>
            <h4>Checkout</h4>
            {loading && <Loader />}
            {checkoutToken && step === 0 && <AddressForm setStep={setStep} />}
            {checkoutToken && step === 1 && <PaymentForm setStep={setStep} checkoutToken={checkoutToken} refreshCart={refreshCart}/>}
        </Container>
    );
};

export default Checkout;