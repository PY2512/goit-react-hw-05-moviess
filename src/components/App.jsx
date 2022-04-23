import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import './App.css';

function App() {
  const [searchImageName, setSearchImageName] = useState('');

  return (
    <div className="App">
      <ToastContainer />

      <Searchbar submit={setSearchImageName} />
      <ImageGallery searchImageName={searchImageName} />
    </div>
  );
}


export default App;
