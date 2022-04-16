import React from 'react';
import PropTypes from 'prop-types';
import style from './notification.module.css'

const Notification = ({ message }) => <p className={style.notification}>{message}</p>;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;