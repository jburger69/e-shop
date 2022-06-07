import React, { Component } from 'react';
import '../components/ProductCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class ProductCard extends Component {
    render() {
        const { image, id, title, category, description, price, rating} = this.props.product
        return (
            <Card sx={{ maxWidth: 450 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={image}
                    alt="#"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {rating.rate}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to Cart</Button>
                    <Button size="small">View Product</Button>
                </CardActions>
            </Card>
        );
    }
}

export default ProductCard;

