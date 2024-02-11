import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId)=>{
    useEffect(() => {
        getMovieVideo();
        // eslint-disable-next-line
    }, []);
    
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
            API_OPTIONS
        );
        const json = await data.json();
        const trailerVideo = json.results.filter(res=> res.type==="Trailer")[0];
        const trailer = trailerVideo? trailerVideo : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };
};

export default useMovieTrailer;
