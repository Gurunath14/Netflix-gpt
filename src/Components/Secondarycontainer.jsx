import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const SecondaryContainer = () => {
  const Movieselector = useSelector((state) => state.movies.nowplayingmovies);
  console.log(Movieselector);
  return (
    <div>
      <Movielist
        title={"Now Playing"}
        Movies={Movieselector ? Movieselector : ""}
      />
      <Movielist
        title={"Now Playing"}
        Movies={Movieselector ? Movieselector : ""}
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
  );
};
export default SecondaryContainer;
