import React, { useEffect, useState } from "react";
import { Candidate } from "../../@types/candidateTypes";
import { CandidateDetails } from "./";
import styled from "styled-components";

interface ElectionDetailsProps {
    candidates: Candidate[];
}

export function ElectionDetails(props: ElectionDetailsProps) {
    const [totalVotes, setTotalVotes] = useState(0);
    const [
        candidateWithMoreVotes,
        setCandidateWithMoreVotes,
    ] = useState<Candidate>();

    useEffect(() => {
        // Obtain all votes every candidades state changes
        let totalVotes = 0;
        for (let i in props.candidates) {
            totalVotes += props.candidates[i].votes;
        }
        setTotalVotes(totalVotes);

        

        // Reorder candidates list, this obtains the last updated candidate and we use the index 0 for identify it
        const candidates = [...props.candidates];

        const sortByDate = candidates.sort((a, b) => {
            const dateA = new Date(a.update_at);
            const dateB = new Date(b.update_at);
            return dateB.getTime() - dateA.getTime();
        });

        setCandidateWithMoreVotes(sortByDate[0]);
    }, [props.candidates]);

    return (
        <ElectionDetailContainer>
            <TotalVotes>Total votes <TotalVotesCounter>{totalVotes}</TotalVotesCounter></TotalVotes>
            <LastCandidateTitle>Last voted candidate</LastCandidateTitle>
            <CandidateDetails candidate={candidateWithMoreVotes} />
        </ElectionDetailContainer>
    );
}

const ElectionDetailContainer = styled.div``;

const TotalVotes = styled.div`
    background-color: #2B6ED9;
    color: #fff;
    max-width: 200px;
    margin: 10px auto;
    height: 80px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const TotalVotesCounter = styled.div`
    font-size: 2em;
`;

const LastCandidateTitle = styled.h3`
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    color: #6a6b6f;
`;