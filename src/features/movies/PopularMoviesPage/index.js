import { useEffect, useState } from "react";
import { Container } from "../../../common/Container";
import TilesSection from "../../../common/TilesSection";
import MovieTile from "../MovieTile";

const PopularMoviesPage = () => {
  const base_url = "https://api.themoviedb.org/3";
  const api_key = "api_key=0e017d1cf3aa44c76887c24c592892f0";

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(`${base_url}/discover/movie?sort_by=popularity.desc&${api_key}`)
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  const slicedPopularMovies = popularMovies.slice(0, 8);
  console.log(slicedPopularMovies);

  return (
    <Container>
      <TilesSection title="Popular movies">
        {popularMovies &&
          slicedPopularMovies.map((movie) => (
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
