import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import './App.css';
import ImageGallery from './ImageGallery/ImageGallery';

const App = () => {
  const [searchImageName, setSearchImageName] = useState('');

  const handleSearchbarSubmit = searchImageName => {
    setSearchImageName(searchImageName);
  };

  const onPageScroll = () => {
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Searchbar onSubmit={handleSearchbarSubmit} />
      <ImageGallery searchImageName={searchImageName} scroll={onPageScroll} />

      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;
