import React from "react";
import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerMovie = useSelector(store=> store.movies.trailerVideo);
    useMovieTrailer(movieId);

    return (
        <div className="w-screen">
            <iframe
                width="1340"
                height="700"
                src={"https://www.youtube.com/embed/SzINZZ6iqxY?si="+ trailerMovie?.key + "?rel=0&autoplay=1&mute=1"}
                title="YouTube video player"
            ></iframe>
        </div>
    );
};

export default VideoBackground;
