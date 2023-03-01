import {
  StyledActorTile,
  ActorImage,
  ActorName,
  Role,
  DummyActor,
} from "./styled";

const ActorTile = ({ poster, name, role }) => {
  return (
    <StyledActorTile>
      {poster ? (
        <ActorImage
          src={`https://image.tmdb.org/t/p/w342${poster}`}
          alt={name}
        />
      ) : (
        <div>
          <DummyActor />
        </div>
      )}
      <ActorName>{name}</ActorName>
      <Role>{role}</Role>
    </StyledActorTile>
  );
};

export default ActorTile;
