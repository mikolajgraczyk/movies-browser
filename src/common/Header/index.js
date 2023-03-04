import { useLocation } from "react-router-dom";
import { searchQueryParamName, useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import {
    StyledHeader,
    GridWrapper,
    Wrapper,
    StyledVideoIcon,
    TitleWrapper,
    TitleText,
    StyledNavLink,
    StyledSearchIcon,
    SearchBar,
    SearchBarIcon,
    SearchBarInput,
    ButtonsWrapper,
} from "./styled";

const Header = () => {
    const location = useLocation();
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <StyledHeader>
            <GridWrapper>
                <Wrapper>
                    <TitleWrapper>
                        <StyledVideoIcon />
                        <TitleText>Movies Browser</TitleText>
                    </TitleWrapper>
                    <ButtonsWrapper>
                        <StyledNavLink to="/movies">MOVIES</StyledNavLink>
                        <StyledNavLink to="/people">PEOPLE</StyledNavLink>
                    </ButtonsWrapper>
                </Wrapper>
                <SearchBar>
                    <SearchBarIcon>
                        <StyledSearchIcon />
                    </SearchBarIcon>
                    <SearchBarInput
                        placeholder={
                            location.pathname.includes("people")
                              ? "Search for people..."
                              : "Search for movies..."
                            }
                        value={query || ""}
                        onChange={onInputChange}
                    />
                </SearchBar>
            </GridWrapper>
        </StyledHeader>
    );
};

export default Header;