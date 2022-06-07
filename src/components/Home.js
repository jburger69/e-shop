import React from 'react'
import { connect } from 'react-redux'
import "../components/Home.css"
// import logo from "../images/pexels-karolina-grabowska-5632397.jpg";
import ProductCard from '../components/ProductCard';

class Home extends React.Component {


  state={
    products: []
  }


  render() {

    

    const products = this.state.products.length === 0 ? this.props.products.map(p => <ProductCard product={p} />) 
    : this.state.products.map(p => <ProductCard product={p} />)


    return (
          <div className="home">
              <div className="home__container">
                  {products}
              </div>
          </div>
    )
  }


}

const mapStateToProps = (state) => {
  return{
    products: state.products,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(Home)