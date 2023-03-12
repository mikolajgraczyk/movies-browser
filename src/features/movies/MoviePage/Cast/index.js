import { useSelector } from "react-redux";
import { selectMovieCast } from "../movieSlice";
import { GridList } from "../../../../common/GridList";
import TilesSection from "../../../../common/TilesSection";
import ActorTile from "../../../people/ActorTile";

const Cast = () => {
  const movieCast = useSelector(selectMovieCast);

  return (
    movieCast.length > 0 && (
      <TilesSection location="detailsPage" title="Cast">
        <GridList popularPeople>
          {movieCast.map((movie) => (
            <li key={movie.cast_id}>
              <ActorTile
                poster={movie.profile_path}
                name={movie.name}
                role={movie.character}
                id={movie.id}
              />
            </li>
          ))}
        </GridList>
      </TilesSection>
    )
  );
};

export default Cast;
