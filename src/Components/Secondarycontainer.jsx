import { useSelector } from "react-redux";
import Movielist from "./Movielist";
import usePopularMovies from "../Hooks/usePopularMovies";

const SecondaryContainer = () => {
  usePopularMovies();
  const Movieselector = useSelector((state) => state.movies.nowplayingmovies);
  const popularselector = useSelector((state) => state.movies.popularmovies);
  console.log(Movieselector);
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
        <Movielist
          title={"Now Playing"}
          Movies={Movieselector ? Movieselector : ""}
        />
        <Movielist
          title={"Now Playing"}
          Movies={Movieselector ? Movieselector : ""}
        />
      </div>
    </div>
  );
};
export default SecondaryContainer;
