import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { PixabayFetch } from '../services/search-api';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import s from '../ImageGallery/ImageGallery.module.css';

const newPixabayFetch = new PixabayFetch();

const ImageGallery = ({ searchImageName, scroll }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [status, setStatus] = useState('idle');
  const [bigImg, setBigImg] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!searchImageName.trim()) return;
    setStatus('pending');
    newPixabayFetch.resetPage();
    newPixabayFetch.searchQuery = searchImageName;
    newPixabayFetch
      .searchImages()
      .then(searchResult => {
        setStatus('success');
        setSearchResult(searchResult);
      })
      .catch(err => {
        setStatus('error');
      });
    // return () => alert('unmount');
  }, [searchImageName, setSearchResult]);

  const handleClick = () => {
    newPixabayFetch.page = 1;
    newPixabayFetch
      .searchImages()
      .then(searchResult => {
        setSearchResult(prev => [...prev, ...searchResult]);
        setStatus('success');
        scroll();
      })
      .catch(err => {
        setStatus('error');
      });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onImageClick = e => {
    e.preventDefault();
    let imgSrc = e.target.src;
    setBigImg(searchResult.find(el => el.webformatURL === imgSrc));
    toggleModal();
  };

  if (status === 'idle') {
    return <p className={s.text}>Hello! Enter the name of the picture</p>;
  }
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'success') {
    return (
      <>
        <ul className={s.ImageGallery}>
          <ImageGalleryItem
            searchResult={searchResult}
            onImageClick={onImageClick}
          />
        </ul>
        <Button onClick={handleClick} />
        {showModal && <Modal toggleModal={toggleModal} bigImg={bigImg}></Modal>}
      </>
    );
  }
  if (status === 'error') {
    return <p className={s.text}>Something went wrong</p>;
  }
};

export default ImageGallery;

ImageGallery.propTypes = {
  searchImageName: PropTypes.string.isRequired,
  scroll: PropTypes.func.isRequired,
};
