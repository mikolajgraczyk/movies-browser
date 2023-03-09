import styled from "styled-components";
import dummyActorImage from "./images/dummyIcon.svg";

export const DummyActor = styled.div`
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.silver};
  background-image: url(${dummyActorImage});
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 100%;
  }
`;
