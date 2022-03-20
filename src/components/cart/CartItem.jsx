import React from 'react';
import { Button } from 'react-bootstrap';

import './CartItem.css';

const CartItem = ({ item, handleRemoveFromCart, handleUpdateCartQty }) => {

    return (
        <tr>
            <td className='image-name-product'>
                <img src={item.image.url} width='40px' height='45px' alt={item.name}></img>
                {item.name}
            </td>
            <td className='price-unit-product'>
                <span>
                    {item.price.formatted_with_symbol}
                </span>
            </td>
            <td className='quantity-product-btns'>
                <Button className='subtract' variant="secondary" onClick={() => handleUpdateCartQty(item.id, item.quantity -1)}>-</Button>
                    <span className='quantity-product'>{item.quantity}</span>
                <Button className='add' variant="secondary" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
            </td>
            <td className='price-total-product'>
                <span>
                    {item.line_total.formatted_with_symbol}
                </span>
            </td>
            <td className='remove-product'>
                <button className='remove-product-btn' onClick={() => handleRemoveFromCart(item.id)}>
                    <i className="bi bi-trash" ></i>
                </button>
            </td>
        </tr>
    )
}

export default CartItem;