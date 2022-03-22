import React from 'react';
import { Container, Button, Table, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import './Cart.css';
import Loader from '../loader/Loader';

const Cart = ({ cart, handleEmptyCart, handleRemoveFromCart, handleUpdateCartQty }) => {

    const renderEmptyMessage = () => {
        if (cart.total_unique_items > 0) {
            return;
        }
    
        return (
            <p className="cart-none">
            You have no items in your shopping cart, start adding some!
            </p>
        );
    }

    if (!cart.line_items) return <Loader />; //While waiting for the request

    const filledCart = () => ( //Cart's item
        cart.line_items.map((item) => (
            <CartItem
                item={item}
                key={item.id}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
            />
        ))
    );

    const renderTotal = () => (
        <div className='cart-total'>
            <p className='subtotal'>Subtotal: {cart.subtotal.formatted_with_symbol}</p>
        </div>
    );

    return (
        <Container className='cart' style={{ height: '100vh', marginTop: '7.5em'}} >
                <h4>Shopping Cart</h4>
                { renderEmptyMessage() }
                <Table responsive="md">
                    <thead>
                        <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { filledCart() }{/*  Item's row */}
                    </tbody>
                </Table>
                <div className='cart-footer'>
                    { renderTotal() }
                    <div className='cart-footer-buttons'>
                        <Button className='empty-btn' variant='danger' onClick={handleEmptyCart}>Empty cart</Button>
                        <Button className='checkout-btn' >
                            <Nav.Link as={Link} to='/checkout' className='checkout-btn'>
                                <span>Checkout</span>
                            </Nav.Link>
                        </Button> 
                    </div>
                </div>
        </Container>
    );
};

export default Cart;