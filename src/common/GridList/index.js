import styled, { css } from "styled-components";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const GridList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  justify-content: center;
  grid-gap: 24px;

  @media (max-width: ${bpMobile}px) {
    gap: 16px;
  }

  ${({ popularPeople }) => popularPeople && css`
    grid-template-columns: repeat(auto-fill, 208px);

    @media (max-width: ${bpMobile}px) {
        grid-template-columns: repeat(auto-fill, 136px);
    }
  `}

  ${({ popularMovies }) => popularMovies && css`
    grid-template-columns: repeat(auto-fill, 324px);

    @media (max-width: ${bpMobile}px) {
        grid-template-columns: 1fr;
    }
  `}
`;