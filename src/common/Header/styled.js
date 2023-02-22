import styled from 'styled-components';
import { ReactComponent as VideoIcon } from "./VideoIcon.svg";
import { ReactComponent as SearchIcon } from "./SearchIcon.svg";

export const Wrapper = styled.header`
    background: ${({ theme }) => theme.color.woodsmoke};
    height: 94px;
    display: grid;
    grid-template-columns: 1fr 1.6fr 1fr;
    padding: 35px 293px;
    align-content: center;
    color: ${({ theme }) => theme.color.white};
    width: 100%;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        height: 142px;
        grid-template-columns: 1fr 1fr;
        padding: 16px;
        gap: 19px;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        gap: 8px;
        margin-top: 8px;
    }
`;

export const StyledVideoIcon = styled(VideoIcon)`
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 17px;
        height: 17px;
    }
`;

export const TitleText = styled.div`
    font-family: poppins;
    font-weight: 500;
    font-size: 0.8125rem;
    font-size: clamp(0.8125rem, 0.675rem + 0.6875vw, 1.5rem);

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 13px;
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 16px;
    flex-grow: 1;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        gap: 12px;
        flex-grow: 0;
        margin-top: 8px;
    }
`;

export const HeaderButton = styled.button`
    color: ${({ theme }) => theme.color.white};
    background: none;
    border: none;
    /* border: 1px solid ${({ theme }) => theme.color.white}; */
    border-radius: 24px;
    font-size: 14px;
    font-family: poppins;
    font-weight: 600;
    padding: 8px 24px;

    &:hover{
        cursor: pointer;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 12px;
        padding: 8px 12px;
    }
`;

export const Form = styled.div`
    display: flex;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-column-start: 1;
        grid-column-end: 3;
        justify-content: center;
    }
`;

export const StyledSearchIcon = styled(SearchIcon)`
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 16px;
    }
`;

export const SearchBarIcon = styled.div`
    color: ${({ theme }) => theme.color.waterloo};
    background-color: ${({ theme }) => theme.color.white};
    height: 48px;
    width: 50px;
    border-radius: 33px 0 0 33px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        height: 44px;
    }
`;

export const SearchBar = styled.input`
    font-family: poppins;
    height: 48px;
    width: 432px;
    border: 1px solid ${({ theme }) => theme.color.mystic};
    border-left: none;
    border-radius: 0 33px 33px 0;

    &::placeholder{
        color: ${({ theme }) => theme.color.waterloo};
    }

    &:focus{
        outline: none;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        height: 44px;
        width: 288px;
        width: 100%;

        &::placeholder{
            font-size: 13px;
        }
    }
`;