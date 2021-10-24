import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from '../Modal/Modal.module.css';

const Modal = ({ toggleModal, bigImg }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDownClose);
    return () => window.removeEventListener('keydown', handleKeyDownClose);
  });

  const handleKeyDownClose = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };
  const handleBackdropClose = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return (
    <div onClick={handleBackdropClose} className={s.Overlay}>
      <div className={s.Modal}>
        <img className={s.Img} src={bigImg.largeImageURL} alt={bigImg.tags} />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  bigImg: PropTypes.object.isRequired,
};
