import styled from "styled-components";
import { ReactComponent as DummyMovie } from "./video.svg";

export const StyledTile = styled.div`
    margin: 16px;
    display: grid;
    grid-template-columns: 1fr ;
    grid-gap: 16px;
    padding: 16px;
    background: #FFF;
    border-radius: 5px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    width: 324px;
    height: 650px;

    @media (max-width: 320px) {
        grid-template-columns: auto 1fr;
        width: 288px;
        height: 201px;
    }
`;

export const MovieInfo = styled.div`
    margin: 0;
    padding: 0;
`;

export const Poster = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 292px;
    height: 434px;
    background-color: #C4C4C4;
    border-radius: 5px;
   
    @media (max-width: 320px) {
        width: 114px;
        height: 169px;
    }


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
    margin: 8px 0;
    color: #7e839a;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    @media (max-width: 320px) {
        font-size: 13px;
        line-height: 130%;
    }       
`;

export const Dummy = styled(DummyMovie)`
    width: 80px;
    height: 60px;

    @media (max-width: 320px) {
        width: 40px;
        height: 30px;
    }    
`;