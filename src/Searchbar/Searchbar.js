import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import s from '../Searchbar/Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [searchImageName, setSearchImageName] = useState('');

  const handleNameChange = e => {
    setSearchImageName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchImageName.trim() === '') {
      toast.error('Введите название картинки!');
      return;
    }
    onSubmit(searchImageName);
    setSearchImageName('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchForm__button}>
          <span className={s.SearchForm__button__label}>Search</span>
        </button>

        <input
          className={s.SearchForm__input}
          value={searchImageName}
          type="text"
          placeholder="Search images and photos"
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
