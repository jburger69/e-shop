import React from 'react'
import { useParams } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import '../components/Product.css'

const Product = ({ products }) => {
    const { id } = useParams();

    const productId = products[id - 1]
    console.log(productId)
    const { image, title, category, description, price, rating} = productId



    return (
        <div className='product__container'>
            <div className='product__image'>
                <CardMedia
                        component="img"
                        image={image}
                        alt="#"
                />
            </div>
            <div className='product__info'>
                <h1>{title}</h1>
                <h1>{description}</h1>
                <h1>{category}</h1>
                <h1>{price}</h1>
                <h1>{rating.rate}</h1>
            </div>
        </div>
    );
}

export default Product;



