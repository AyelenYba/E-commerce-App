import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Product from './Product';

const Products = ({ products, onAddToCart }) => {

    return (
        <Container direction='horizontal' style={{marginTop: '7.5em'}}>
            <Row xs={1} sm={2} md={3} xl={4} >
                {products.map((product) => {
                    return <Product product={product} key={product.id} onAddToCart={onAddToCart} />
                })}
            </Row>
        </Container>
    )
}

export default Products;