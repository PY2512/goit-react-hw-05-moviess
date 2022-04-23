import React from 'react';
import PropTypes from 'prop-types';


const ImageGalleryItem = ({
    image: { webformatURL, tags },
    image,
    onModalOpen,
    }) => (
    <li className="ImageGalleryItem" onClick={() => onModalOpen(image)}>
        <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
);

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string,
        tags: PropTypes.string,
    }).isRequired,
    onModalOpen: PropTypes.func.isRequired,
}

export default ImageGalleryItem;