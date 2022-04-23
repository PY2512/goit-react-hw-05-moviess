import {useEffect} from "react";
import PropTypes from "prop-types";
// import { Modal } from 'components/Modal/Modal';


function Modal({
    onModalClose, 
    activeModalImg:{largeImageURL, tags},
}) {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleKeyDown = event => {
        if (event.keyCode === 27){
            onModalClose();
        }
    };

    const handleBackdropClick = event => {
        // console.log(event);
        if (event.currentTarget === event.target) {
            onModalClose();
        }
    };

    return (
        <div className="Overlay" onClick={handleBackdropClick}>
            <div className="Modal">
                <img src={largeImageURL} alt={tags} className="modalImg"/>
            </div>
        </div>
    );
}


Modal.propTypes = {
    onModalClose: PropTypes.func.isRequired,
    activeImg: PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }).isRequired,
}

export default Modal;