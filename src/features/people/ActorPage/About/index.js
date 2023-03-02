import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "../../../../common/Container";
import { fetchActorDetails, selectActorInfo } from "../actorSlice";
import {
  StyledAbout,
  ActorBio,
  ActorImage,
  BirthInfo,
  Name,
  SpecificInfo,
} from "./styled";

const About = ({ actorInfo }) => {
  return (
    <Container>
      <StyledAbout>
        <ActorImage
          src={`https://image.tmdb.org/t/p/w500${actorInfo.profile_path}`}
        />

        <div>
          <Name>{actorInfo.name}</Name>
          <BirthInfo>
            <div>
              <SpecificInfo>Date of birth:</SpecificInfo>
              {actorInfo.birthday}
            </div>
            <div>
              <SpecificInfo>Place of birth</SpecificInfo>
              {actorInfo.place_of_birth}
            </div>
          </BirthInfo>

          <ActorBio>{actorInfo.biography}</ActorBio>
        </div>
      </StyledAbout>
    </Container>
  );
};

export default About;
