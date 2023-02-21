import { MovieInfo, Poster, Rates, StyledTile, Subtitle, Tags, Title } from "./styled";

export const MovieTile = () => {

    return (
        <StyledTile>
            <Poster id="image" />
            <MovieInfo>
                <Title>Mulan</Title>
                <Subtitle>2020</Subtitle>
                <Tags id="tags" />
                <Rates id="scores" />
            </MovieInfo>
        </StyledTile>
    );
}