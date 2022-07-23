import React from 'react'
import { useParams } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import '../components/Product.css'
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const Product = ({ products }) => {
    const { id } = useParams();
    const productId = products[id - 1]
    const {  image, title, category, description, price, rating} = productId



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
                <h4>{title}</h4>
                <Typography variant="body1" gutterBottom>{description}</Typography>
                <h4>{category}</h4>
                <h4>{price}</h4>
                <h4>{rating.rate}</h4>
            </div>
            <Link to="/">Back to Products</Link>
        </div>
    );
}

export default Product;



