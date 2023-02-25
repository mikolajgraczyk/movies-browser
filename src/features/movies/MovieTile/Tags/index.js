import { useState, useEffect } from "react";
import { StyledTags, Tag } from "./styled";

const Tags = ({ genreIds }) => {
  const base_url = "https://api.themoviedb.org/3";
  const api_key = "api_key=0e017d1cf3aa44c76887c24c592892f0";

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(`${base_url}/genre/movie/list?${api_key}&language=en-US`)
      .then((response) => response.json())
      .then(({ genres }) =>
        setGenres(
          genreIds.map((genreId) => {
            return genres.find((genre) => genre.id === genreId);
          })
        )
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
