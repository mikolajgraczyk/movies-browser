import { useState, useEffect } from "react";
import { StyledTags, Tag } from "./styled";
import {
  selectGenres,
  selectedGenreByIds,
  setMovieGenreId,
} from "../../moviesSlice";
import { useSelector } from "react-redux";

const Tags = ({ genreIds }) => {
  const genres = useSelector(state => selectedGenreByIds(state, genreIds));

  return (
    <StyledTags>
      {genres.map(({ id, name }) => (
        <Tag key={id}>{name}</Tag>
      ))}
    </StyledTags>
  );
};

export default Tags;
