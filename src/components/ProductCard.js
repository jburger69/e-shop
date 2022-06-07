import React, { Component } from 'react';
import '../components/ProductCard.css'

class ProductCard extends Component {
    render() {
        const { image, id, title, category, description, price, rating} = this.props.product
        return (
            <div className='product__item'>
                <h4>{title}</h4>
                <h4>{description}</h4>
                <h4>{category}</h4>
                <h4>{price}</h4>
                <h4>{rating.rate}</h4>
                <img  className="product__item__img" src={image} alt="#"></img><br></br>
            </div>
        );
    }
}

export default ProductCard;

