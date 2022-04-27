import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './MoviesListItem.module.css';
import noPosterImg from './../../../images/no-poster.jpg';

const MoviesListItem = ({
    poster,
    id,
    title,
    name,
    releaseDate,
    url,
    location,
    }) => (
    <li className={style.listItem}>
        <Link to={{ pathname: `${url}/${id}`, state: { from: location } }}>
        <img
            src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : noPosterImg}
            alt={title || name}
            className={style.poster}
        />
        <h2 className={style.title}>
            {title || name}
            {releaseDate && <span> ({releaseDate.slice(0, 4)})</span>}
        </h2>
        </Link>
    </li>
);

MoviesListItem.propTypes = {
    poster: PropTypes.string,
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
};

export default MoviesListItem;