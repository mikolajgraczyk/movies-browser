import { useSelector } from "react-redux";
import { GridList } from "../../../../common/GridList";
import TilesSection from "../../../../common/TilesSection";
import MovieTile from "../../../movies/MovieTile";
import { selectMoviesCast } from "../actorSlice";

const Cast = () => {
  const moviesCast = useSelector(selectMoviesCast);

  return (
    moviesCast.length > 0 && (
      <TilesSection
        location="detailsPage"
        title={`Movies - cast (${moviesCast.length})`}
      >
        <GridList popularMovies>
          {moviesCast.map((movie) => (
            <li key={movie.credit_id}>
              <MovieTile
                title={movie.title}
                genreIds={movie.genre_ids}
                poster={movie.poster_path}
                subtitle={`${movie.character} (${movie.first_air_date.slice(
                  0,
                  4
                )})`}
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
