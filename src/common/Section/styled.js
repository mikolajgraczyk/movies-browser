import styled from "styled-components";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledSection = styled.div`
border: 1px double red;
    margin: 0 auto;
    padding-top: 56px;
    max-width: 1368px;
   
    @media (max-width: ${bpMobile}px) {
        padding-top: 24px;
        max-width: 288px;
  }
`;

export const Title = styled.h1`
border: 1px double orange;
    margin: 0 0 24px 0;
    color: ${({ theme }) => theme.color.woodsmoke};
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;

    @media (max-width: ${bpMobile}px) {
        margin: 0 0 12px 0;
        font-size: 18px;
  }
`;