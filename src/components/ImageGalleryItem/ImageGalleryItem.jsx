import PropTypes from 'prop-types';


const ImageGalleryItem = ({
    image: {webformatURL, tag},
    image,
    onModalOpen,
}) => {
    return (
        <li className='ImageGalleryItem' onClick={()=>onModalOpen(image)}>
            <img className='ImageGalleryItem-image' src={webformatURL} alt={tag}/>
        </li>
    );
}

ImageGalleryItem.propTypes ={
    image: PropTypes.shape({
        webformatURL: PropTypes.string,
        tags: PropTypes.string,
    }).isRequired,
    onModalOpen: PropTypes.func.isRequired,
}

export default ImageGalleryItem;