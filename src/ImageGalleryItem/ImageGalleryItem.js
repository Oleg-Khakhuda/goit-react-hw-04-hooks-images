import PropTypes from 'prop-types';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ searchResult, onImageClick }) => {
  return searchResult.map(el => (
    <li className={s.ImageGalleryItem} key={el.id}>
      <img
        src={el.webformatURL}
        alt={el.tags}
        className={s.ImageGalleryItem__image}
        onClick={onImageClick}
      />
    </li>
  ));
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  searchResult: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
