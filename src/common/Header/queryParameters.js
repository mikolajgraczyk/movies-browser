import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

export const useQueryParameter = (key) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    return searchParams.get(key);
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    return ({ key, value }) => {
        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        };
        setSearchParams(searchParams);
        navigate(location.pathname.includes("people")
            ? `/people?${searchParams}`
            : `/movies?${searchParams}`
        );
    };
};

export const searchQueryParamName = "search";