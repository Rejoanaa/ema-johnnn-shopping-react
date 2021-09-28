import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { name, img, seller, price, stock, star } = product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <img src={img} alt="" />

            <div>
                <h5>{name}</h5>
                <div className="details">
                    <div>
                        <p><small>by {seller}</small></p>
                        <div>
                            <p>${price}</p>
                            <p>only {stock} left in stock - order soon</p>
                            <button onClick={() => handleAddToCart(product)}>{element} add to cart</button>
                        </div>
                    </div>
                    <div>
                        <h3>features</h3>
                        <Rating initialRating={star}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly></Rating>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;