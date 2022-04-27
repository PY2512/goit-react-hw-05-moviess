import PropTypes from 'prop-types';
import style from './Error.module.css';

import NotFoundPic from '../../images/not-found.jpg';

function Error({ message }) {
    return (
        <div role="alert" className={style.wrapper}>
        <img
            src={NotFoundPic}
            width="650"
            alt="not found pic"
            className={style.img}
        />
        <p text={message} className={style.message}>
            {message}
        </p>
        </div>
    );
}

Error.propTypes = {
    message: PropTypes.string,
};

export default Error;