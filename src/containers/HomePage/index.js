import React from 'react';
// import VideoBox from '../../components/VideoBox';
import BackgroundBox from '../../components/BackgroundBox';
import AlertBox from '../../components/AlertBox';
import SearchBox from '../../components/SearchBox';
import SearchBar from '../SearchBar';
import './Homepage.css';

class HomePage extends React.Component {
  state = {
    alert: false,
    alertMessage: ''
  };

  sendAlert = (message) => {
    this.setState({
      alertMessage: message
    });
    this.setState({
      alert: true
    });
    setTimeout(() => { 
      this.setState({
        alert: false,
      });
    }, 2000);
  }

  render () {
    return (
      <div className="mainContainer">
        {/* { this.state.alert ? <AlertBox  /> : <VideoBox />} */}
        {/* <VideoBox /> */}
        <div className="mainSearchContainer">
          <SearchBox/>
        </div>
        <BackgroundBox/>
        <AlertBox 
          alertMessage={this.state.alertMessage} 
          alertVisible={this.state.alert}
        />
        <SearchBar sendAlert={this.sendAlert} setRestaurantData={this.props.setRestaurantData}/>
      </div>
    )
  }
}

export default HomePage;