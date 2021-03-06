import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import { Pagination } from '@mui/material';

import { fetchTrendingMovies } from './../../services/moviesApi';
import Status from './../../services/Status';

import MoviesList from './../../components/MoviesList/MoviesList';
import Loader from './../../components/Loader/Loader';
import Error from './../../components/Error/Error';
import style from './HomeView.module.css';

function HomeView() {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(Status.PENDING);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const history = useHistory();
    const location = useLocation();

    const page = new URLSearchParams(location.search).get('page') ?? 1;

    useEffect(() => {
        setStatus(Status.PENDING);
        const fetchMovies = async () => {
        try {
            const { results, total_pages } = await fetchTrendingMovies(page);
            setMovies(results);
            setTotalPages(total_pages);
            setStatus(Status.RESOLVED);
        } catch (error) {
            setError(error);
            setStatus(Status.REJECTED);
        }
        };
        fetchMovies();
    }, [page]);

    const pageHandler = (event, page) => {
        history.push({ ...location, search: `page=${page}` });
    };

    return (
        <>
        <h2 className={style.title}>Trending today</h2>
        {status === Status.PENDING && <Loader />}
        {status === Status.REJECTED && error && <Error message={error} />}
        {status === Status.RESOLVED && (
            <>
            <MoviesList movies={movies} url={'movies'} location={'/'} />
            {totalPages > 1 && (
                <div className={style.wrapper}>
                <Pagination
                    count={totalPages}
                    onChange={pageHandler}
                    page={Number(page)}
                    showFirstButton
                    showLastButton
                />
                </div>
            )}
            </>
        )}
        </>
    );
}

export default HomeView;