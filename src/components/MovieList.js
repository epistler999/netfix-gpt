import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({movieTitle, movies}) => {
    return (
        <div>
            <h1 className='text-white text-3xl'>{movieTitle}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {
                        movies &&
                        movies.map(res=><MovieCard key={res.id} movie={res}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;
