import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = (props) => {
    const { handleAddToCart, cart } = props;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    let { setCart } = props;
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data)
            })
    }, []);
    useEffect(() => {
        // length 0 hole falsy hoye jabe r true hole porer step gula kaj korbe
        if (products.length) {
            const savedProduct = getStoredCart();
            const storedCart = [];
            for (const key in savedProduct) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedProduct[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart)
        }
    }, [products, setCart])
    // 1st useEffect tar products er state change hoilei 2nd useEffect ta abaar call hobe
    const handleInput = (event) => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts)

        console.log(matchedProducts)
    }

    return (
        <div>
            <div className="input">
                <input type="text" onChange={handleInput} />
                <button>{element} {cart.length}</button>
            </div>
            <div className="container">
                <div className="shop-container">
                    <div className="product-container">
                        {
                            displayProducts.map(product => <Product
                                key={product.key}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></Product>)
                        }
                    </div>
                    <div className="cart-container">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;