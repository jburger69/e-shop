import React from 'react'
import { useParams } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import '../components/Product.css'
import Typography from '@mui/material/Typography';
import StarRateIcon from '@mui/icons-material/StarRate';
import SellIcon from '@mui/icons-material/Sell';
import Button from '@mui/material/Button';
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
                <SellIcon></SellIcon>${price}<br></br><br></br>
                <StarRateIcon></StarRateIcon>{rating.rate}<br></br>
            </div>
            <div className='product__links'>
                <Button className='back__to__products' size="small">Add to Cart</Button><br></br>
                <Link className='back__to__products' to="/">Back to Products</Link>
            </div>
        </div>
    );
}

export default Product;



