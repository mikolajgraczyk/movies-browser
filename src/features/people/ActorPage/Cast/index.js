import React from "react";
import { Container } from "../../../../common/Container";
import { GridList } from "../../../../common/GridList";
import TilesSection from "../../../../common/TilesSection";
import MovieTile from "../../../movies/MovieTile";

const Cast = ({ moviesCast }) => {
  console.log(moviesCast);
  return (
    moviesCast.length > 0 && (
      <Container>
        <TilesSection title={`Movies - cast`}>
          <GridList popularMovies>
            {moviesCast.map((movie) => (
              <li key={movie.credit_id}>
                <MovieTile
                  title={movie.name}
                  genreIds={movie.genre_ids}
                  poster={movie.poster_path}
                  subtitle={movie.character}
                />
              </li>
            ))}
          </GridList>
        </TilesSection>
      </Container>
    )
  );
};

export default Cast;
