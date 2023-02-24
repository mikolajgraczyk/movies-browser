import styled from "styled-components";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledTilesSection = styled.section``;

export const SectionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 324px);
  justify-content: center;
  grid-gap: 24px;

  @media (max-width: ${bpMobile}px) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(0, 100%));
  }
`;

export const SectionTitle = styled.h2`
  margin: 0 0 24px 0;
  color: ${({ theme }) => theme.color.woodsmoke};
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;

  @media (max-width: ${bpMobile}px) {
    margin: 0 0 12px 0;
    max-width: 1368px;
    font-size: 18px;
  }
`;
