import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";


const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    
    useEffect(()=>{
        fetchMovies();
        // eslint-disable-next-line
    },[])

    const fetchMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }
};

export default usePopularMovies;
