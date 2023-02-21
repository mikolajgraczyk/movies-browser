import styled from "styled-components";

export const StyledTile = styled.div`
    margin: 16px;
    display: grid;
    grid-template-columns: auto ;
    grid-gap: 16px;
    padding: 16px;
    background: #FFF;
    border-radius: 5px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

    @media (max-width: 320px) {
        grid-template-columns: auto 1fr;
    }
`;

export const MovieInfo = styled.div`
border: 1px dotted blue;
    margin: 0;
    padding: 0;
`;
export const Poster = styled.div`
    /* background: url(Mulan.jpg); */
    min-width: 114px;
    max-width: 292px;
    min-height: 169px;
    max-height: 434px;
    background: #C4C4C4;
    border-radius: 5px;
`;

export const Title = styled.h2`
    margin: 0;
    color: #18181B;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;

    @media (max-width: 320px) {
        font-size: 16px;
    }     
`;

export const Subtitle = styled.p`
    margin-top: 4px;
    color: #7e839a;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    @media (max-width: 320px) {
        font-size: 13px;
        line-height: 130%;
    }       
`;

export const Tags = styled.div`
border: 1px dotted grey;
    margin: 8px 0;
height: 19px;

`;

export const Rates = styled.div`
border: 1px dotted orange;
    margin: 8px 0;
height: 24px;
`;