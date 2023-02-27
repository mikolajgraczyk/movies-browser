import { useEffect, useState } from "react";
import { Container } from "../../../common/Container";
import TilesSection from "../../../common/TilesSection";
import { getPopularData } from "../../getPopularData";
import MovieTile from "../MovieTile";

const PopularMoviesPage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const fetchMovies = await getPopularData("movie");
        setPopularMovies(fetchMovies);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <Container>
      <TilesSection title="Popular movies">
        {popularMovies &&
          popularMovies.map((movie) => (
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
      </TilesSection>
    </Container>
  );
};

export default PopularMoviesPage;
