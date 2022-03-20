import React from 'react';
import { Col, Card, CardImg, Button } from 'react-bootstrap';

import './Product.css';

const Product = ({ product, onAddToCart }) => {

    const handleAddToCart = () => {
        onAddToCart(product.id, 1);
    }

    return (
        <Col >
            <Card>
                <CardImg variant="top" src={product.image.url} />
                <Card.Body>
                    <Card.Title className='product-info'>
                        <p>{product.name}</p>
                        <p>{product.price.formatted_with_symbol}</p>
                    </Card.Title>
                    <Card.Text dangerouslySetInnerHTML={{ __html: product.description }} className='product-description'>
                    </Card.Text>
                        <div className='add-to-cart'>
                            <Button name='Add to cart' variant="dark" className='add-cart' onClick={handleAddToCart} >Add</Button>
                        </div>
                </Card.Body>
            </Card>
            <br/>
        </Col>
    )
}

export default Product;