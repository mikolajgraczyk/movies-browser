import { useState } from "react";
import { useLocation } from "react-router-dom";
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
    const [input, setInput] = useState();
    const location =useLocation();

    const onInputChange = ({ target }) => setInput(target.value);

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
                        value={input}
                        onChange={onInputChange}
                    />
                </SearchBar>
            </GridWrapper>
        </StyledHeader>
    );
};

export default Header;