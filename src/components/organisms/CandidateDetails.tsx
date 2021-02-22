import React from "react";
import { Candidate } from "../../@types/candidateTypes";
import styled from "styled-components";

interface CandidateDetailsProps {
    candidate?: Candidate;
}

export function CandidateDetails(props: CandidateDetailsProps) {
    if (props.candidate !== undefined) {
        return (
            <CandidateDetailsContainer>
                <CandidateDetailsPhoto
                    src={props.candidate.photoURL}
                    alt={props.candidate.firstname}
                />
                <CandidateDetailsName>
                    {props.candidate.firstname + " " + props.candidate.lastname}
                </CandidateDetailsName>
                <CandidateDetailsInfo>
                    {props.candidate.slogan}
                </CandidateDetailsInfo>
                <CandidateDetailsInfo>
                    <strong>Edad:</strong> {props.candidate.age} años
                </CandidateDetailsInfo>
                <CandidateDetailsInfo>
                    <strong>Votos:</strong> {props.candidate.votes}
                </CandidateDetailsInfo>
            </CandidateDetailsContainer>
        );
    }

    return null;
}


const CandidateDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    background-color: #fff;
    z-index: 999;
`;

const CandidateDetailsPhoto = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
`;

const CandidateDetailsName = styled.p`
    font-weight: bold;
    font-size: 1.2em;
    margin-top: 10px;
    color: #6a6b6f;
`;

const CandidateDetailsInfo = styled.p`
    margin-top: 10px;
    color: #6a6b6f;
    text-align: center;
`;
