import React from 'react'
import { useSelector } from 'react-redux';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import MovieCard from './MovieCard';
import MovieList from './MovieList';

const SecondaryContainer = () => {
    usePopularMovies();
    useTopRatedMovies();
    const movies = useSelector(store=> store.movies?.nowPlayingMovie);
    const popularMovies = useSelector(store=> store.movies?.popularMovies);
    const topRatedMovies = useSelector(store=> store.movies?.topRatedMovies);
    if(!movies) return;

    return (
        <div className='m-4 bg-black'>
            <MovieList movieTitle="Now Playing Movies" movies={movies} />
            <MovieList movieTitle="Trending Movies" movies={movies} />
            <MovieList movieTitle="Top Rated Movies" movies={movies} />
            <h1 className='text-white text-3xl'>Popular Movies</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {
                        popularMovies &&
                        popularMovies.map(res=><MovieCard key={res.id} movie={res}/>)
                    }
                </div>
            </div>
        </div>


    )
}

export default SecondaryContainer;
