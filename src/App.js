
import { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import { getProducts } from './actions/Products'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Product from "./components/Product";

class App extends Component {

  componentDidMount(){
    this.props.getProducts()
  }


  render (){
    return (
      <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/products/:id' element={<Product  products={this.props.products} />} />
        </Routes>
        <Footer />
      </Router>
      </div>
    )
  };


}

const mapStateToProps = (state) => {
  return{
    products: state.products,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getProducts })(App);
