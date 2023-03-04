import { StyledTags, Tag } from "./styled";
import { selectedGenreByIds } from "../../moviesSlice";
import { useSelector } from "react-redux";

const Tags = ({ genreIds }) => {
  const genres = useSelector((state) => selectedGenreByIds(state, genreIds));
  // console.log(genres)
  return (
    <StyledTags>
      {genres.map(({ id, name }) => (
        <Tag key={id}>{name}</Tag>
      ))}
    </StyledTags>
  );
};

export default Tags;
