import { useState, useEffect } from "react";
import { StyledTags, Tag } from "./styled";
import { selectGenres } from "../../moviesSlice";
import { useSelector } from "react-redux";

const Tags = ({ genreIds }) => {
  const [genres, setGenres] = useState([]);
  const genreNames = useSelector(selectGenres);

  useEffect(() => {
      setGenres(
        genreIds.map((genreId) => {
          return genreNames.find((genre) => genre.id === genreId);
        })
      );
  }, []);

  return (
    <StyledTags>
      {genres.map(({ id, name }) => (
        <Tag key={id}>{name}</Tag>
      ))}
    </StyledTags>
  );
};

export default Tags;
