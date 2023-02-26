import styled from "styled-components";
import { ReactComponent as Star } from "./star.svg";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledRates = styled.div`
  margin: 10px 0 0;
  height: 24px;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap; // just in case there is a lot votes
  gap: 12px;
  font-size: 16px;
  line-height: 150%;

  @media (max-width: ${bpMobile}px) {
    position: static;
    gap: 7px;
    font-size: 13px;
    line-height: 130%;
    margin: 8px 0 0;
  }
`;

export const Votes = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
`;

export const Score = styled.span`
  color: ${({ theme }) => theme.color.woodsmoke};
  font-weight: 600;
`;

export const StyledStar = styled(Star)`
  width: 24px;
  height: 21px;

  @media (max-width: ${bpMobile}px) {
    width: 16px;
    height: 16px;
  }
`;
