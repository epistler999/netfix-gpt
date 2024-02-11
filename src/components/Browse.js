
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    return (
        <div className="w-screen bg-black h-800">
            <Header parentPage="browse"/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
};

export default Browse;
