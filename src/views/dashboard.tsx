import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../helpers";
import { getCandidates } from "../@actions";
import { Container } from "../globalStyles";
import { CandidateList, ElectionDetails } from "../components/organisms";
import { Menu, Close } from "@material-ui/icons";
import styled, { keyframes } from "styled-components";

export function Dashboard() {
    const candidatesReducer = useSelector<RootStore>(
        (state) => state.candidateReducer.candidates
    );
    const [showPreview, setShowPreview] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCandidates());
    }, []);

    return (
        <Container>
            <Rows>
                <ListComponent col={ColSizes["col-8"]}>
                    <AplicationTitle>Voting App</AplicationTitle>
                    <CandidateList
                        candidates={
                            Array.isArray(candidatesReducer)
                                ? candidatesReducer
                                : []
                        }
                    />
                </ListComponent>
                <HamburgerMenu onClick={() => setShowPreview(!showPreview)}>
                    {!showPreview && <ButtonMenu />}
                    {showPreview && <ButtonMenuClose />}
                </HamburgerMenu>
                <Preview col={ColSizes["col-4"]} show={showPreview}>
                    <ElectionTitle>Election details</ElectionTitle>
                    <ElectionDetails
                        candidates={
                            Array.isArray(candidatesReducer)
                                ? candidatesReducer
                                : []
                        }
                    />
                </Preview>
            </Rows>
        </Container>
    );
}

const ElectionTitle = styled.h2`
    color: #6a6b6f;
`;

const AplicationTitle = styled.h1`
    color: #2b6ed9;
`;

const Rows = styled.div`
    display: flex;
    justify-content: space-between;
`;

enum ColSizes {
    "col-4" = 3,
    "col-6" = 2,
    "col-8" = 1.55,
    "col-12" = 1,
}

interface ColProps {
    col?: ColSizes;
}

const Col = styled.div`
    width: ${(props: ColProps) =>
        props.col ? "calc(100% / " + props.col + ")" : "100%"};

    @media only screen and (max-width: 800px) {
        width: 100%;
    }
`;

interface PreviewProps {
    show?: boolean;
}

const Preview = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    position: fixed;
    right: 0;
    background-color: #fff;
    padding: 30px 20px;

    @media only screen and (max-width: 900px) {
        display: ${(props: PreviewProps) => (props.show ? "flex" : "none")};
    }
`;

const Pulse = keyframes`
    40% {
        box-shadow: 0 0 0 0 rgba(43,110,217,.3);
    }
    80% {
        box-shadow: 0 0 15px 0 rgba(43,110,217 , .3);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(43,110,217 , 0);
    }
`;

const HamburgerMenu = styled.div`
    display: none;
    position: absolute;
    top: 20px;
    cursor: pointer;
    right: 20px;
    background-color: #fff;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation-name: ${Pulse};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    z-index: 999;

    @media only screen and (max-width: 900px) {
        display: flex;
    }
`;

const ButtonMenu = styled(Menu)`
    color: #9a9fa3;
`;
const ButtonMenuClose = styled(Close)`
    color: #9a9fa3;
`;

const ListComponent = styled(Col)`
    margin-top: 20px;

    @media only screen and (max-width: 550px) {
        padding: 0 10px;
    }
`;
