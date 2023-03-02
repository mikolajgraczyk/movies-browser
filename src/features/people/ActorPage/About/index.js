import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPersonById } from "../../../getPopularData";
import {
  fetchActorCredits,
  fetchActorDetails,
  selectActorDetails,
  selectCredits,
} from "../actorSlice";
import {
  StyledAbout,
  ActorBio,
  ActorImage,
  ActorInfo,
  BirthInfo,
  Name,
  SpecificInfo,
} from "./styled";

const About = ({ id }) => {
  const dispatch = useDispatch();

  const actorDetails = useSelector(selectActorDetails);
  const credits = useSelector(selectCredits);
  console.log(credits);

  useEffect(() => {
    dispatch(fetchActorDetails(id));
    dispatch(fetchActorCredits(id));
  }, [id]);

  return (
    <StyledAbout>
      <ActorImage
        src={`https://image.tmdb.org/t/p/w500${actorDetails.profile_path}`}
      />

      <div>
        <Name>{actorDetails.name}</Name>
        <BirthInfo>
          <div>
            <SpecificInfo>Date of birth:</SpecificInfo>
            {actorDetails.birthday}
          </div>
          <div>
            <SpecificInfo>Place of birth</SpecificInfo>
            {actorDetails.place_of_birth}
          </div>
        </BirthInfo>

        <ActorBio>{actorDetails.biography}</ActorBio>
      </div>
    </StyledAbout>
  );
};

export default About;
