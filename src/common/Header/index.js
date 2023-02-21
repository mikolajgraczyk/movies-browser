import { useState } from "react";
import {
    Wrapper,
    StyledVideoIcon,
    TitleWrapper,
    TitleText,
    HeaderButton,
    Form,
    StyledSearchIcon,
    SearchBar,
    SearchBarIcon,
    ButtonsWrapper,
} from "./styled";

const Header = () => {
    const [input, setInput] = useState();

    const onInputChange = ({ target }) => setInput(target.value);
    const onFormSubmit = event => event.preventDefault();

    return (
        <Wrapper>
            <TitleWrapper>
                <StyledVideoIcon />
                <TitleText>
                    Movies Browser
                </TitleText>
            </TitleWrapper>
            <ButtonsWrapper>
                <HeaderButton>
                    MOVIES
                </HeaderButton>
                <HeaderButton>
                    PEOPLE
                </HeaderButton>
            </ButtonsWrapper>
            <Form onSubmit={onFormSubmit}>
                <SearchBarIcon>
                    <StyledSearchIcon />
                </SearchBarIcon>
                <SearchBar
                    placeholder="Search for movies..."
                    value={input}
                    onChange={onInputChange}
                />
            </Form>
        </Wrapper>
    );
};

export default Header;