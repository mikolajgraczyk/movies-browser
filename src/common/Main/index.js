import styled from "styled-components";

export const Main = styled.main`
  padding: 56px 16px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 24px 16px 32px;
  }
`;
