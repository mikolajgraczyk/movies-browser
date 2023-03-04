import styled from "styled-components";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledAbout = styled.section`
  display: grid;
  grid-template-columns: minmax(116px, 399px) auto;
  grid-template-areas:
    "i h"
    "i d";
  padding: 40px;
  column-gap: 40px;

  @media (max-width: ${bpMobile}px) {
    column-gap: normal;
    gap: 16px;
    padding: 16px;
  }
`;

export const ActorImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px;
  grid-area: 1 / 1 / 3 / 2;

  @media (max-width: ${bpMobile}px) {
    grid-row: 1 / 2;
  }
`;

export const ActorInfo = styled.div``;

export const Name = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin: 0 0 24px;

  @media (max-width: ${bpMobile}px) {
    font-size: 14px;
    margin: 0 0 16px;
  }
`;

export const BirthInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 0 24px;
  font-size: 18px;
  grid-area: d;

  @media (max-width: ${bpMobile}px) {
    font-size: 12px;
    margin: 0 0 4px;
  }
`;

export const SpecificInfo = styled.span`
  color: ${({ theme }) => theme.color.stormGrey};
  margin: 0 10px 0 0;
`;

export const ActorBio = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 1.6;
  grid-area: d;

  @media (max-width: ${bpMobile}px) {
    grid-column: 1 / 3;
    font-size: 14px;
  }
`;
