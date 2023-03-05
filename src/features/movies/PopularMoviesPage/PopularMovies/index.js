import { Container } from "../../../../common/Container";
import { GridList } from "../../../../common/GridList";
import TilesSection from "../../../../common/TilesSection";
import MovieTile from "../../MovieTile";
import { useSelector } from "react-redux";
import { selectMovies } from "../../moviesSlice";

const PopularMovies = () => {
  const movies = useSelector(selectMovies);

  return (
    <Container>
      <TilesSection title="Popular movies">
        <GridList popularMovies>
          {movies &&
            movies.map((movie) => (
              <li key={movie.id}>
                <MovieTile
                  title={movie.title}
                  subtitle={movie.release_date.slice(0, 4)}
                  poster={movie.poster_path}
                  score={movie.vote_average}
                  votes={movie.vote_count}
                  genreIds={movie.genre_ids}
                />
              </li>
            ))}
        </GridList>
      </TilesSection>
    </Container>
  );
};

export default PopularMovies;
