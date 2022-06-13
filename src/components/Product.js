import React from 'react'
import { connect } from 'react-redux'
import { useSelector} from 'react-redux';
import _ from 'lodash';

// const selectProductIds = state => state.products.map(product => product.id)
// console.log(selectProductIds)

class Product extends React.Component {

    
    
    
    // const product = productDetails.find(product => product.id === parseInt(match.params.id))
    // const { title} = product

    // console.log(productDetails.id)
    render() {
        
        
        return (
            <div>
                <h1>hello</h1>
            </div>
          )
    }


}



export default connect()(Product);
