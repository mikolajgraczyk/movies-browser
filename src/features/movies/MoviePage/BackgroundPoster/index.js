import { useSelector } from "react-redux";
import { selectMovieInfo } from "../MovieSlice";
import Rating from "../Rating";
import {
  StyledBackgroundPoster,
  Wrapper,
  Info,
  Title,
  BigPoster,
  Gradient,
} from "./styled";

const BackgroundPoster = () => {
  const movieInfo = useSelector(selectMovieInfo);

  return (
    <StyledBackgroundPoster>
      <Gradient />
      <div>
        <BigPoster
          src={`https://image.tmdb.org/t/p/w1280/${movieInfo.backdrop_path}`}
          alt=""
        />
      </div>
      <Wrapper>
        <Info>
          <Title>{movieInfo.original_title}</Title>
          <Rating
            location="backgroundPoster"
            averageVotes={movieInfo.vote_average.toFixed(1)}
            voteAmount={movieInfo.vote_count}
          />
        </Info>
      </Wrapper>
    </StyledBackgroundPoster>
  );
};

export default BackgroundPoster;
