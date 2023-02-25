import { useEffect, useState } from "react";
import { Container } from "../../../common/Container";
import TilesSection from "../../../common/TilesSection";
import MovieTile from "../MovieTile";

const PopularMoviesPage = () => {
  const base_url = "https://api.themoviedb.org/3";
  const api_key = "api_key=0e017d1cf3aa44c76887c24c592892f0";

  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=0e017d1cf3aa44c76887c24c592892f0&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => setGenres(data.genres));

    fetch(`${base_url}/discover/movie?sort_by=popularity.desc&${api_key}`)
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  const slicedPopularMovies = popularMovies.slice(0, 8);
  console.log(slicedPopularMovies);

  return (
    <Container>
      <TilesSection title="Popular movies">
        {slicedPopularMovies.map((movie) => (
          <MovieTile
            key={movie.backdrop_path}
            title={movie.title}
            subtitle={movie.release_date}
            poster={movie.poster_path}
            score={movie.vote_average}
            votes={movie.vote_count}
          />
        ))}
      </TilesSection>
    </Container>
  );
};

export default PopularMoviesPage;
