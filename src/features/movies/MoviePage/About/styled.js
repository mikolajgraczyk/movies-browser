import styled from "styled-components";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledAbout = styled.div`
  margin-top: 64px;
  background: white;
  padding: 40px;
  display: grid;
  justify-items: center;
  grid-template-areas:
    "p i"
    "p i"
    "p d";
  grid-column-gap: 40px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

  @media (max-width: ${bpMobile}px) {
    margin-top: 16px;
    padding: 16px;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-areas:
    "p i"
    "p i"
    "d d";
  }
`;

export const Poster = styled.img`
  width: 312px;
  height: 464px;
  border-radius: 5px;
  align-self: center;
  grid-area: p;

  @media (max-width: ${bpMobile}px) {
    width: 114px;
    height: 169px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-self: left;
  grid-area: i;

  @media (max-width: ${bpMobile}px) {
    gap: 8px;
  }
`;

export const Name = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin: 0;

  @media (max-width: ${bpMobile}px) {
    font-weight: 500;
    font-size: 16px;
  }
`;

export const ReleaseYear = styled.span`
  font-weight: 400;
  font-size: 22px;
  line-height: 120%;

  @media (max-width: ${bpMobile}px) {
    font-size: 13px;
    color: ${({ theme }) => theme.color.stormGrey};
  }
`;

export const SpecificInfo = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${bpMobile}px) {
    font-size: 12px;
  }
`;

export const ProductionAndRelease = styled.span`
  color: ${({ theme }) => theme.color.stormGrey};
  margin-right: 10px;

  @media (max-width: ${bpMobile}px) {
    display: none;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: ${bpMobile}px) {
    gap: 8px;
  }
`;

export const Tag = styled.div`
  padding: 8px 16px;
  background: ${({ theme }) => theme.color.mystic};
  border-radius: 5px;
  font-size: 14px;

  @media (max-width: ${bpMobile}px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 160%;
  margin: 0;
  grid-column-start: 2;
  grid-row-start: 2;
  grid-area: d;

  @media (max-width: ${bpMobile}px) {
    font-size: 14px;
  }
`;
