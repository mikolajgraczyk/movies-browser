import { useEffect } from "react";
import { Container } from "../../../common/Container";
import TilesSection from "../../../common/TilesSection";
import ActorTile from "../ActorTile/index";
import { useSelector, useDispatch } from "react-redux";
import { selectPeople, fetchPeople } from "../peopleSlice";
import { GridList } from "../../../common/GridList";

const PopularPeoplePage = () => {
  const people = useSelector(selectPeople);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
  }, []);

  return (
    <Container>
      <TilesSection title="Popular people">
        <GridList popularPeople>
          {people &&
            people.map(person => (
              <li key={person.id}>
                <ActorTile
                  poster={person.profile_path}
                  name={person.name}
                />
              </li>
            ))}
        </GridList>
      </TilesSection>
    </Container>
  );
};

export default PopularPeoplePage;