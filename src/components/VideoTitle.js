import React from 'react'

const VideoTitle = ({title, overview}) => {
    return (
        <div className="m-8 p-16 absolute text-white">
            <div className='text-4xl font-bold'>{title}</div>
            <div className='w-1/3'>{overview}</div>
            <div>
                <button className='border border-gray-600 bg-gray-300 text-black mx-2 p-2 rounded-md w-28 hover:bg-gray-400'>▶ Play</button>
                <button className='border border-gray-600 bg-gray-500 text-white mx-2 p-2 rounded-md w-36 hover:bg-gray-600'>ⓘ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
