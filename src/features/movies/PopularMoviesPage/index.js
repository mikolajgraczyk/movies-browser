import { useEffect } from "react";
import { Container } from "../../../common/Container";
import { GridList } from "../../../common/GridList";
import TilesSection from "../../../common/TilesSection";
import MovieTile from "../MovieTile";
import { useSelector, useDispatch } from "react-redux";
import { selectMovies, fetchGenres, fetchMovies } from "../moviesSlice";

const PopularMoviesPage = () => {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchMovies());
  }, []);

  return (
    <Container>
      <TilesSection title="Popular movies">
        <GridList popularMovies>
          {movies &&
            movies.map((movie) => (
              <li key={movie.id}>
                <MovieTile
                  title={movie.title}
                  subtitle={movie.release_date}
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

export default PopularMoviesPage;
