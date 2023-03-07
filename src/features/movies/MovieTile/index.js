import Rates from "./Rates";
import {
  MovieInfo,
  Poster,
  StyledMovieTile,
  Subtitle,
  Title,
  Dummy,
} from "./styled";
import Tags from "./Tags";

const MovieTile = ({ poster, title, subtitle, score, votes, genreIds, id }) => {
  return (
    <StyledMovieTile to={`/movies/${id}`}>
      {poster ? (
        <Poster src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
      ) : (
        <div>
          <Dummy />
        </div>
      )}

      <MovieInfo>
        <div>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Tags genreIds={genreIds} />
        </div>
        <Rates score={score} votes={votes} />
      </MovieInfo>
    </StyledMovieTile>
  );
};

export default MovieTile;
