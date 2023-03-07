import { useSelector } from "react-redux";
import { selectMovieInfo } from "../MovieSlice";
import Rating from "../Rating";
import {
  StyledAbout,
  Poster,
  InfoSection,
  Name,
  ReleaseYear,
  SpecificInfo,
  ProductionAndRelease,
  Tags,
  Tag,
  Description,
} from "./styled";

const About = () => {
  const movieInfo = useSelector(selectMovieInfo);

  return (
    <StyledAbout>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
        alt=""
      />
      <InfoSection>
        <Name>{movieInfo.title}</Name>
        <ReleaseYear>{movieInfo.release_date.slice(0, 4)}</ReleaseYear>
        <SpecificInfo>
          <div>
            <ProductionAndRelease>Production:</ProductionAndRelease>
            {movieInfo.production_countries[0].name}
          </div>
          <div>
            <ProductionAndRelease>Release date:</ProductionAndRelease>
            {movieInfo.release_date}
          </div>
        </SpecificInfo>
        <Tags>
          {Object.values(movieInfo.genres).map((genre) => (
            <Tag key={genre.id}>{genre.name}</Tag>
          ))}
        </Tags>
        <Rating
          averageVotes={movieInfo.vote_average.toFixed(1)}
          voteAmount={movieInfo.vote_count}
        />
      </InfoSection>
      <Description>{movieInfo.overview}</Description>
    </StyledAbout>
  );
};

export default About;
