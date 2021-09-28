import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    const shipping = (total > 0) ? 15 : 0;
    let tax = 0;
    if (total > 500) {
        tax = total * 0.05;
    }
    let orderTotal = total + tax + shipping;
    return (
        <div className="cart">
            <h2>order summary</h2>
            <h4>items order:{cart.length}</h4>
            <br />
            <p>Total:{total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <br />
            <h5>Order total:{orderTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;