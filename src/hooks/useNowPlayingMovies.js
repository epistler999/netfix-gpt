import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";


const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    
    useEffect(()=>{
        fetchMovies();
        // eslint-disable-next-line
    },[])

    const fetchMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }
};

export default useNowPlayingMovies;
