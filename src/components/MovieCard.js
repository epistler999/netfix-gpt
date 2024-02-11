import React from 'react'
import { IMAGE_CDN } from '../utils/constant'

const MovieCard = ({movie}) => {
    return (
        <>
            { movie.poster_path &&
                <div className='m-2 w-40 hover:scale-110 transform delay-100'>
                    <img alt="poster" src={IMAGE_CDN + movie.poster_path}/>
                </div>
            }

        </>

    )
}

export default MovieCard;
