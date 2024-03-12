import { useSelector } from "react-redux";
import Movielist from "./Movielist";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopMovies from "../Hooks/useTopMovies";

const SecondaryContainer = () => {
  usePopularMovies();
  useTopMovies();
  const Movieselector = useSelector((state) => state.movies.nowplayingmovies);
  const popularselector = useSelector((state) => state.movies.popularmovies);
  const topmovies = useSelector((state) => state.movies.topmovies);
  return (
    <div className="bg-[#141414]">
      <div className="flex flex-col gap-52">
        <Movielist
          title={"Now Playing"}
          Movies={Movieselector ? Movieselector : ""}
        />
        <Movielist
          title={"Popluar Movies"}
          Movies={popularselector ? popularselector : ""}
        />
        <Movielist title={"Top Movies"} Movies={topmovies ? topmovies : ""} />
        <Movielist
          title={"Now Playing"}
          Movies={Movieselector ? Movieselector : ""}
        />
      </div>
    </div>
  );
};
export default SecondaryContainer;
