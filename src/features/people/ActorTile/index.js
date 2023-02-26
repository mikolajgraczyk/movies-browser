import {
  StyledActorTile,
  ActorImage,
  ActorName,
  Role,
  DummyActor,
} from "./styled";

const ActorTile = ({ image, name, role }) => {
  return (
    <StyledActorTile>
      {image ? <ActorImage src={image} alt={name} /> : <DummyActor />}
      <ActorName>Liu Yifei</ActorName>
      <Role>Mulan</Role>
    </StyledActorTile>
  );
};

export default ActorTile;
