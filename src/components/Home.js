import React from 'react'
import { connect } from 'react-redux'
import "../components/Home.css"
// import logo from "../images/pexels-karolina-grabowska-5632397.jpg";
import ProductCard from '../components/ProductCard';
import SideBarFilter from "../components/SideBarFilter";

class Home extends React.Component {


  state={
    products: []
  }


  render() {

    

    const products = this.state.products.length === 0 ? this.props.products.map((p, key) => <ProductCard product={p} key={key} />) 
    : this.state.products.map((p, key) => <ProductCard product={p} key={key} />)


    return (
          <div className="home">
              <div className='sidebar__filter'>
                <SideBarFilter />
              </div>
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