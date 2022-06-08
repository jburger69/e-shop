
import { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import { getProducts } from './actions/Products'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  componentDidMount(){
    this.props.getProducts()
  }


  render (){
    return (
      <Router>
        <div className="App">
          <Header />
          <Home />
        </div>
      </Router>
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
