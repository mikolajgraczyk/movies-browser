import styled from "styled-components";

export const StyledAbout = styled.section`
  display: grid;
  grid-template-columns: minmax(116px, 399px) auto;
  padding: 40px;
  gap: 40px;
`;

export const ActorImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const ActorInfo = styled.div``;

export const Name = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin: 0 0 24px;
`;

export const BirthInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 0 24px;
  font-size: 18px;
`;

export const SpecificInfo = styled.span`
  color: ${({ theme }) => theme.color.stormGrey};
  margin: 0 10px 0 0;
`;

export const ActorBio = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 1.6;
`;
