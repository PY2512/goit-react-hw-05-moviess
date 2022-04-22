import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import './App.css';

class App extends Component {
  state = {
    searchImageName: '',
  };

  handleFormSubmit = searchImageName => {
    this.setState({ searchImageName });
  };

  render() {
    const { searchImageName } = this.state;

    return (
      <div className="App">
        <ToastContainer />
        <h2>Hello my friends!!!</h2>

        <Searchbar submit={this.handleFormSubmit} />
        <ImageGallery searchImageName={searchImageName} />
      </div>
    );
  }
}

export default App;
