import React from 'react';
import { Col, ListGroup, Row} from 'react-bootstrap';

import './OrderReview.css';

const OrderReview = ({ checkoutToken }) => {
    return (
        <Col className='order-review-container d-flex flex-column mx-auto'>
            <h5 className='my-4' style={{ textAlign: 'center' }}>Order Review</h5> 

        <ListGroup style={{width: '100%', fontSize: '0.85em'}}>
            {checkoutToken.live.line_items.map((product) => (
                <ListGroup.Item className='d-flex justify-content-center' key={product.id}>
                    <Row 
                    xs={3} 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        width: '100%' 
                        }}
                    >
                        <span className='product-name' >{product.name}</span>
                        <span className='product-quantity' style={{textAlign: 'center'}}>
                            Quantity: {product.quantity}
                        </span>
                        <span className='product-total-price' style={{textAlign: 'center'}}>
                            {product.line_total.formatted_with_symbol}
                        </span>
                    </Row>
                </ListGroup.Item>
            ))}
                <Row>
                <span className='order-total-price my-4' 
                style={{ 
                    display: 'flex', 
                    justifyContent: 'right', 
                    fontWeight: 'bold'
                    }}
                >
                    Total:{checkoutToken.live.subtotal.formatted_with_symbol}
                </span>
            </Row>
        </ListGroup>
    </Col>
    )
}

export default OrderReview;