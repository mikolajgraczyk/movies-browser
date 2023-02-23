import styled from "styled-components";

export const StyledMovies = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-evenly;
    grid-gap: 24px;
    margin: 0 auto 40px auto;

    @media (max-width: 632px) {
        grid-template-columns: auto;
    };

    @media (min-width: 633px) and (max-width: 1020px) {
        grid-template-columns: auto auto;
    };

    @media (min-width: 1020px) and (max-width: 1370px) {
        grid-template-columns: auto auto auto;
    };
`;