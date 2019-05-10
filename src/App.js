import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './containers/Header';
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import RestaurantsPage from './containers/RestaurantsPage';

class App extends Component {
  state = {
    restaurantData: {}
  };

  setRestaurantData = (data) => {
    this.setState({
      restaurantData: data
    });
  };

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Route exact path='/' 
          render={(props) => (<HomePage {...props} setRestaurantData={this.setRestaurantData}/>)}/>
        {/* <Route path='/about' component={AboutPage}/>
        <Route path='/restaurants' 
          render={(props) => (<RestaurantsPage {...props} restaurantData={this.state.restaurantData}/>)}/> */}
      </div>
    );
  };
};

export default App;
