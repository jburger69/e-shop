import React, { Component } from 'react';

class ProductCard extends Component {
    render() {
        const { image, id, title, category, description, price, rating} = this.props.product
        return (
            <div>
                {title}<br></br>
                {description}<br></br>
                {category}<br></br>
                {price}<br></br>
                {rating.rate}<br></br>
                <img src={image} alt="#"></img><br></br>
            </div>
        );
    }
}

export default ProductCard;

