import React, { Component } from 'react';
import '../components/ProductCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarRateIcon from '@mui/icons-material/StarRate';
import SellIcon from '@mui/icons-material/Sell';
import { Link } from "react-router-dom";


class ProductCard extends Component {
    render() {
        const { id, image, title, category, description, price, rating} = this.props.product

        return (
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    component="img"
                    image={image}
                    alt="#"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.primary"><br></br>
                        {description}
                    </Typography>
                    <Typography variant="body1"><br></br>
                        {category}
                    </Typography>
                    <Typography variant="body1"><br></br>
                        <SellIcon></SellIcon>${price}
                    </Typography>
                    <Typography variant="body1"><br></br>
                        <StarRateIcon></StarRateIcon>{rating.rate}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to Cart</Button>
                    {/* <Button size="small">View Product</Button> */}
                    <Link to={`products/${id}`}>View Product</Link>
                </CardActions>
            </Card>
        );
    }
}

export default ProductCard;

