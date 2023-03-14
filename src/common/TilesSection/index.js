import { SectionTitle } from "./styled";

const TilesSection = ({ title, children, location }) => {
  return (
    <section>
      <SectionTitle location={location}>{title}</SectionTitle>
      {children}
    </section>
  );
};
export default TilesSection;
