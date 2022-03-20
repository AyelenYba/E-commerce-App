import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/home/Home';
import Products from './components/products/Products';
import Menu from './components/menu/Menu';
import { commerce } from './commerce/commerce';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import './App.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [error, setError] = useState('');

    const fetchProducts = async () => {
        await commerce.products.list()
        .then((products) => {
            setProducts(products.data);
        }).catch((error) => {
            console.log('There was an error fetching the products', error);
        });
    };

    const fetchCart = async () => {
        await commerce.cart.retrieve()
        .then((cart) => {
            setCart(cart);
        }).catch((error) => {
            console.error('There was an error fetching the cart', error);
        });
    };

    const handleAddToCart = async (productId, quantity) => {
        try {
            const response = await commerce.cart.add(productId, quantity);
            setCart(response.cart);
        } catch(error) {
            console.error('There was an error adding the item to the cart', error);
        };
    };

    const handleUpdateCartQty = async (productId, quantity) => {
        try {
            const response = await commerce.cart.update(productId, { quantity }) //quantity in a new object because is the thing that updates.
            setCart(response.cart);
        } catch (error) {
            console.error('There was an error updating the cart items', error);
        }
    };

    const handleRemoveFromCart = async (productId) => {
        try {
            const response = await commerce.cart.remove(productId);
            setCart(response.cart);
        } catch(error) {
            console.error('There was an error removing the item from the cart', error);
        }
    };

    const handleEmptyCart = async () => {
        try {
            const response =await commerce.cart.empty();
            setCart(response.cart);
        } catch(error) {
            console.error('There was an error emptying the cart', error);
            setError(error.data.error.message);
        }
    };

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);
    
    return (
        <>
            <Router>
                <Menu totalItems={cart.total_items}/>    
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route 
                    exact 
                    path='/products' 
                    element={
                        <Products 
                        products={products} 
                        onAddToCart={handleAddToCart} 
                        />
                    } 
                    />
                    <Route 
                    exact 
                    path='/cart' 
                    element={
                        <Cart cart={cart} 
                        handleEmptyCart={handleEmptyCart} 
                        handleRemoveFromCart={handleRemoveFromCart} 
                        handleUpdateCartQty={handleUpdateCartQty}
                        />
                    }
                    />
                    <Route 
                    exact 
                    path='/checkout' 
                    element={
                        <Checkout 
                        cart={cart}
                        error={error}
                        refreshCart={refreshCart}
                        />
                    } 
                    />
                </Routes>
            </Router>
        </>
    )
}

export default App;