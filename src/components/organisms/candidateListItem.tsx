import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setVote } from "../../@actions";
import { Candidate } from "../../@types/candidateTypes";
import { CandidateDetails } from "./";
import { Close } from "@material-ui/icons";

interface CandidateListItemProps {
    candidate: Candidate;
}

export const CandidateListOne = (props: CandidateListItemProps) => {
    const dispatch = useDispatch();
    const [showDetails, setShowDetails] = useState(false);

    const candidateSetVote = (id: number) => {
        dispatch(setVote(id, "+"));
    };

    const candidateRemoveVote = (id: number) => {
        dispatch(setVote(id, "-"));
    };

    return (
        <CandidateListItem>
            <ProfileInfo>
                <ProfileInfoCandidate>
                    <CandidateProfileImage
                        src={props.candidate.photoURL}
                        alt={props.candidate.firstname}
                    />
                    <strong>
                        {props.candidate.firstname +
                            " " +
                            props.candidate.lastname}
                    </strong>
                </ProfileInfoCandidate>
                <ProfileInfoShowDetails>
                    <ButtonTriggerDetails onClick={() => setShowDetails(true)}>
                        <CandidateDetailsText>
                            Candidate details
                        </CandidateDetailsText>
                    </ButtonTriggerDetails>

                    {showDetails && (
                        <CandidateDetailsContainer>
                            <ButtonCloseContainer
                                onClick={() => setShowDetails(false)}
                            >
                                <ButtonMenuClose />
                            </ButtonCloseContainer>

                            <CandidateDetails candidate={props.candidate} />
                        </CandidateDetailsContainer>
                    )}
                </ProfileInfoShowDetails>
            </ProfileInfo>
            <VoteContainer>
                <ButttonVote
                    onClick={() => candidateRemoveVote(props.candidate.id)}
                >
                    -
                </ButttonVote>
                <VoteCounter>{props.candidate.votes}</VoteCounter>
                <ButttonVote
                    onClick={() => candidateSetVote(props.candidate.id)}
                >
                    +
                </ButttonVote>
            </VoteContainer>
        </CandidateListItem>
    );
};

const CandidateDetailsText = styled.span`
    text-align: center;
`;

const ButtonCloseContainer = styled.div`
    z-index: 9999;
    position: absolute;
    top: 20px;
    right: 20px;
`;

const ButtonTriggerDetails = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const ButtonMenuClose = styled(Close)`
    color: #9a9fa3;
    font-size: 1.6em;
`;

const CandidateListItem = styled.li`
    width: 100%;
    border-top: 1px solid #e7e7e7;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;

    &:last-child {
        border-bottom: 1px solid #e7e7e7;
    }

    @media only screen and (max-width: 550px) {
        flex-direction: column;
    }
`;

const CandidateDetailsContainer = styled.div`
    position: absolute;
    left: 0;
    width: 300px;
    height: auto;
    padding: 20px;
    background-color: #fff;
    z-index: 99999;

    @media only screen and (max-width: 550px) {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const VoteContainer = styled.div`
    border: 1px solid #c2c6c7;
    padding: 3px;
    border-radius: 25px;
    min-width: 140px;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s all;

    &:hover {
        background-color: #2d6be2;
    }

    @media only screen and (max-width: 550px) {
        margin-top: 20px;
    }
`;

const ButttonVote = styled.div`
    width: 40px;
    height: 40px;
    background-color: #ebeff2;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #899299;
    font-size: 1.5em;
    font-weight: bold;
    transition: 0.5s all;
    cursor: pointer;

    ${VoteContainer}:hover & {
        background-color: #5b8de6;
        color: #fff;
    }
`;

const VoteCounter = styled.div`
    color: #899299;
    transition: 0.5s all;

    ${VoteContainer}:hover & {
        color: #fff;
    }
`;

const ProfileInfo = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 20px;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 550px) {
        grid-template-columns: 2fr 1fr;
        gap: 10px;
    }
`;

const ProfileInfoCandidate = styled.div`
    height: 100%;
    color: #6a6b6f;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
`;

const ProfileInfoShowDetails = styled.div`
    position: relative;
    border: 1px solid #dadedf;
    padding: 0 20px;
    height: 100%;
    color: #9a9fa3;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s all;

    &:hover {
        background-color: #2d6be2;
        color: #fff;
    }
`;

const CandidateProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;
