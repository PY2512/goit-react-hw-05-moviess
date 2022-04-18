import React, {Component} from "react";
import PropTypes from "prop-types";

class Modal extends Component {
    
    handleKeyDown = event => {
        if (event.keyCode === 27){
            this.props.onModalClose();
        }
    };

    handleBackdropClick = event => {
        console.log(event);
        if (event.currentTarget === event.target) {
            this.props.onModalClose();
        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    
    render() {
        const {
            activeImg: {largeImageURL, tag},
        } = this.props;

        return (
            <div className="Overlay" onClick={this.handleBackdropClick}>
                <div className="Modal">
                    <img src={largeImageURL} alt={tag} className="modalImg"/>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onModalClose: PropTypes.func.isRequired,
    activeImg: PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }).isRequired,
}

export default Modal;