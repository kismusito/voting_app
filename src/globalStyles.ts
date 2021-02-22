import styled from "styled-components";

export const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;

    @media only screen and (max-width: 992px) {
        max-width: 960px;
    }

    @media only screen and (max-width: 768px) {
        max-width: 720px;
    }

    @media only screen and (max-width: 576px) {
        max-width: 540px;
    }
    
    @media only screen and (max-width: 576px) {
        max-width: 100%;
    }
`;
