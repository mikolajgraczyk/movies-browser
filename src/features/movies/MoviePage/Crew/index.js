import { useSelector } from "react-redux";
import { selectMovieCrew } from "../movieSlice";
import TilesSection from "../../../../common/TilesSection";
import { GridList } from "../../../../common/GridList";
import ActorTile from "../../../people/ActorTile";

const Crew = () => {
  const movieCrew = useSelector(selectMovieCrew);

  return (
    movieCrew.length > 0 && (
      <TilesSection location="detailsPage" title="Crew">
        <GridList popularPeople>
          {movieCrew.map((movie) => (
            <li key={movie.credit_id}>
              <ActorTile
                poster={movie.profile_path}
                name={movie.name}
                role={movie.job}
                id={movie.id}
              />
            </li>
          ))}
        </GridList>
      </TilesSection>
    )
  );
};

export default Crew;
