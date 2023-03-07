import styled from "styled-components";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledBackgroundPoster = styled.div`
  background: black;
  margin: -56px -16px 0px;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: ${bpMobile}px) {
    margin-top: -24px;
  } ;
`;

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      270deg,
      #000000 14.11%,
      rgba(0, 0, 0, 0.873268) 15.08%,
      rgba(0, 0, 0, 0.720529) 16.51%,
      rgba(0, 0, 0, 0.294577) 19.99%,
      rgba(0, 0, 0, 0.159921) 21.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      #000000 13.6%,
      rgba(0, 0, 0, 0.984059) 14.58%,
      rgba(0, 0, 0, 0.967732) 15.44%,
      rgba(0, 0, 0, 0.865569) 16.3%,
      rgba(0, 0, 0, 0.230315) 22.87%,
      rgba(0, 0, 0, 0) 26.64%
    ),
    linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.689555) 4.66%,
      rgba(0, 0, 0, 0.439033) 9.34%,
      rgba(0, 0, 0, 0.20628) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106473) 63.17%,
      rgba(0, 0, 0, 0.235359) 68.85%,
      rgba(0, 0, 0, 0.492821) 78.08%,
      rgba(0, 0, 0, 0.740286) 85.86%,
      #000000 92.87%
    );
`;

export const BigPoster = styled.img`
  width: 100%;
`;

export const Wrapper = styled.div`
  position: absolute;
  bottom: 56px;
  left: calc(16.5%);

  @media (max-width: ${bpMobile}px) {
    bottom: 8px;
    left: 16px;
  }
`;

export const Info = styled.div`
  display: grid;
  gap: 25px;

  @media (max-width: ${bpMobile}px) {
    gap: 6px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 64px;
  line-height: 120%;
  margin: 0;

  @media (max-width: ${bpMobile}px) {
    font-size: 24px;
  }
`;
