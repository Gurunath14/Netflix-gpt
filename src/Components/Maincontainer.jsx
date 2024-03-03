import { useSelector } from "react-redux";
import Videobackground from "./Videobackground";
import Videotitle from "./Videotitle";

const Maincontainer = () => {
  const Movies = useSelector((state) => state.movies?.nowplayingmovies);
  if (!Movies) return;
  console.log(Movies[0]);
  const { original_title, overview, id } = Movies[0];
  return (
    <div>
      <Videotitle title={original_title} overview={overview} />
      <Videobackground movieid={id} />
    </div>
  );
};

export default Maincontainer;
