import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import style from './MoviesDetails.module.css';
import noPosterImg from './../../images/no-poster.jpg';

const MoviesDetails = ({ movie, url, location }) => {
    return (
        <>
        <div className={style.wrapper}>
            <img
            src={
                movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : noPosterImg
            }
            alt={movie.title && movie.original_name}
            width="350px"
            className={style.poster}
            />
            <div className={style.description}>
            <h2 className={style.title}>
                {movie.title && movie.original_nam}
                {movie.title}
                {movie.release_date && (
                <span> ({movie.release_date.slice(0, 4)})</span>
                )}
            </h2>
            <h3 className={style.title}>
                Rating:
                <span className={(style.info, style.rating)}>⭐{movie.vote_average}</span>
            </h3>
            <h3 className={style.title}>Overview</h3>
            <p className={style.info}>{movie.overview}</p>
            <h2 className={style.title}>
                Genres:
                <ul className={style.genreList}>
                {movie.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
                </ul>
            </h2>
            </div>
        </div>
        <ul className={style.navigation}>
            <li className={style.link}>
            <NavLink
                to={{
                pathname: `${url}/cast`,
                state: { from: location.state ? location.state.from : '/' },
                }}
                activeClassName={style.activeLink}
            >
                Credits
            </NavLink>
            </li>
            <li className={style.link}>
            <NavLink
                to={{
                pathname: `${url}/reviews`,
                state: { from: location.state ? location.state.from : '/' },
                }}
                activeClassName={style.activeLink}
            >
                Reviews
            </NavLink>
            </li>
        </ul>
        </>
    );
};

MoviesDetails.propTypes = {
    movie: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
};

export default MoviesDetails;