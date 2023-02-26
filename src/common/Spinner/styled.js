import styled from "styled-components";
import { ReactComponent as svgSpinner } from "./images/spinner.svg";

export const StyledSpinner = styled(svgSpinner)`
  width: 91px;
  height: 91px;
  color: #18181b;
  animation: rotation 5s linear infinite;
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
