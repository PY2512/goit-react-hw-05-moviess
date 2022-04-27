import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchMovieCredits } from './../../../services/moviesApi';
import noAvatar from './../../../images/no-avatar.png';

import Status from './../../../services/Status';

import Loader from './../../../components/Loader/Loader';
import style from './Cast.module.css';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE);

    useEffect(() => {
        const fetchActors = async () => {
        try {
            const { cast } = await fetchMovieCredits(movieId);
            if (cast.length === 0) {
            toast.info('No results');
            setStatus(Status.IDLE);
            return;
            }
            setCast(cast);
            setStatus(Status.RESOLVED);
        } catch (error) {
            setError(error);
            setCast([]);
            setStatus(Status.REJECTED);
        }
        };
        fetchActors();
    }, [movieId]);

    return (
        <>
        {status === Status.PENDING && <Loader />}

        {status === Status.RESOLVED && (
            <ul className={style.list}>
            {cast.map(({ id, profile_path, name, character }) => (
                <li key={id} className={style.actor}>
                <img
                    className={style.photo}
                    src={
                    profile_path
                        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                        : noAvatar
                    }
                    alt="actor"
                />
                <p className={style.name}>{name}</p>
                <p className={style.character}>{character || 'unknown'}</p>
                </li>
            ))}
            </ul>
        )}

        {status === Status.REJECTED && error && (
            <p>Whoops, something went wrong</p>
        )}
        </>
    );
};

export default Cast;