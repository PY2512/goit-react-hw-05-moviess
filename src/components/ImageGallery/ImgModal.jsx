import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImgModal = ({ images, onModalOpen }) => (
    <ul className="ImageGallery">
        {images.map(image => (
        <ImageGalleryItem
            key={`image-item-image-${image.id}`}
            image={image}
            onModalOpen={onModalOpen}
        />
        ))}
    </ul>
);

ImgModal.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        }),
    ).isRequired,
    onModalOpen: PropTypes.func.isRequired,
};

export default ImgModal;

