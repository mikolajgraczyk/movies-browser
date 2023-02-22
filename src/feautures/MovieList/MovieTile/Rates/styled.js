import styled from "styled-components";
import { ReactComponent as Star } from "./star.svg";

export const StyledRates = styled.div`
    margin: 8px 0;
    height: 24px;
    display: flex;
    gap: 12px;
    align-items: center;
    font-size: 0.8125rem;
    font-size: clamp(0.8125rem, 0.775rem + 0.1875vw, 1rem);
    @media (max-width: 320px) {
        gap: 4px;
    }
`;

export const Votes = styled.p`
    margin: 0;
    color: #7e839a;
    font-weight: 400;
    line-height: 150%;
`;

export const Score = styled.p`
    margin: 0;
    color: #18181b;
    font-weight: 600;
    line-height: 150%;
`;

export const StyledStar = styled(Star)`
    width: clamp(16px, 24px);
    height: 21px;
`;