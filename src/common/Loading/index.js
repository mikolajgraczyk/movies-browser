import { StyledLoading, StyledSpinner } from "./styled";
import Header from "../Header";

export const Loading = () => {
    return (
        <>
        <Header/>
        <StyledLoading>
            <StyledSpinner />
        </StyledLoading>
        </>
    );
};
