import React, { useState } from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-credit-cards/es/styles-compiled.css';
import Card from 'react-credit-cards';
import Swal from 'sweetalert2';

import CardField from './CardField';
import './CreditCardForm.css';

const CreditCardForm = ({ setStep, refreshCart }) => {

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');

    const onFocusHandle = (e) =>  {
        setFocus(e.target.name);
    }

    const onClickHandle = () => {
        setStep(0);
    }

    const onSubmitHandle = (e) => {
        e.preventDefault();
        refreshCart();
        Swal.fire({ //Alert
            icon: 'success',
            title: 'Thank you!',
            text: 'Your order was successfully submitted',
            confirmButtonText:
            '<Link></Link>Continue shopping',
            confirmButtonAriaLabel: 'Back home',
        }).then((result) => {
            if(result.isConfirmed) {
                window.location.href= '/'
            }
        });
    }

    return (
        <Form className='d-flex flex-column  my-5' onSubmit={onSubmitHandle}>
            <Card number={number} name={name} expiry={expiry} cvc={cvc} focused={focus}/>
            <Col className='d-flex align-items-center flex-column mx-auto order-review-container'>
                <Row xs={1}>
                    <CardField type='tel' name='number' placeholder='Card number' value={number} setState={setNumber} onFocusHandle={onFocusHandle} />
                    <CardField type='text' name='name' placeholder='Name' value={name} setState={setName} onFocusHandle={onFocusHandle}/>
                </Row>
                <Row>
                    <CardField type='text' name='expiry' placeholder='MM/YY' value={expiry} setState={setExpiry} onFocusHandle={onFocusHandle}/>
                    <CardField type='tel' name='cvc' placeholder='cvc' value={cvc} setState={setCvc} onFocusHandle={onFocusHandle}/>
                </Row>
                <div className='creditcardform-footer my-5'>
                    <Button className='back-btn' onClick={onClickHandle}>    
                        <span>Back</span>
                    </Button>
                    <Button className='next-btn' type="submit" >
                        Next
                    </Button>
                </div>
            </Col>
        </Form>
    )
}

export default CreditCardForm;