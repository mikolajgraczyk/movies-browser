import { useParams } from "react-router";
import { Container } from "../../../common/Container";
import About from "./About";

const ActorPage = () => {
  const { id } = useParams();

  return (
    <Container>
      <About id={id} />
    </Container>
  );
};

export default ActorPage;
