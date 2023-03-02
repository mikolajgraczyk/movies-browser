import { Container } from "../../../../common/Container";
import TilesSection from "../../../../common/TilesSection";
import ActorTile from "../../ActorTile/index";
import { useSelector } from "react-redux";
import { selectPeople } from "../../peopleSlice";
import { GridList } from "../../../../common/GridList";

const PopularPeople = () => {
  const people = useSelector(selectPeople);

  return (
    <Container>
      <TilesSection title="Popular people">
        <GridList popularPeople>
          {people &&
            people.map((person) => (
              <li key={person.id}>
                <ActorTile
                  poster={person.profile_path}
                  name={person.name}
                  id={person.id}
                />
              </li>
            ))}
        </GridList>
      </TilesSection>
    </Container>
  );
};

export default PopularPeople;
