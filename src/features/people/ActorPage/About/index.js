import { useSelector } from "react-redux";
import { DummyActor } from "../../DummyActor";
import { selectActorInfo } from "../actorSlice";
import {
  StyledAbout,
  ActorBio,
  ActorImage,
  BirthInfo,
  Name,
  SpecificInfo,
  OptionalInfo,
} from "./styled";

const About = () => {
  const actorInfo = useSelector(selectActorInfo);
  console.log(actorInfo);

  return (
    <StyledAbout>
      {actorInfo.profile_path ? (
        <ActorImage
          src={`https://image.tmdb.org/t/p/w500${actorInfo.profile_path}`}
          alt={actorInfo.name}
        />
      ) : (
        <DummyActor />
      )}

      <div>
        <Name>{actorInfo.name}</Name>
        <BirthInfo>
          {actorInfo.birthday && (
            <div>
              <SpecificInfo>
                <OptionalInfo>date of</OptionalInfo> birth:
              </SpecificInfo>
              {actorInfo.birthday.replaceAll("-", ".")}
            </div>
          )}
          {actorInfo.place_of_birth && (
            <div>
              <SpecificInfo>Place of birth:</SpecificInfo>
              {actorInfo.place_of_birth}
            </div>
          )}
        </BirthInfo>
      </div>

      <ActorBio>{actorInfo.biography}</ActorBio>
    </StyledAbout>
  );
};

export default About;
