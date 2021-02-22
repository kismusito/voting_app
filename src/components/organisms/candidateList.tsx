import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Candidate } from "../../@types/candidateTypes";
import { CandidateListOne } from "./";

interface CandidateListProps {
    candidates: Candidate[];
}

export function CandidateList(props: CandidateListProps) {
    // const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [candidates, setCandidates] = useState<Candidate[]>([]);

    // Sort by votes, first render
    useEffect(() => {
        orderByVotes();
    }, [props.candidates]);

    const orderByVotes = () => {
        const dataOrder = [...props.candidates];
        setCandidates(
            dataOrder.sort((a, b) => {
                return b.votes - a.votes;
            })
        );
    };

    const orderByAge = () => {
        const dataOrder = [...props.candidates];
        setCandidates(
            dataOrder.sort((a, b) => {
                return b.age - a.age;
            })
        );
    };

    return (
        <React.Fragment>
            <ButtonsContainer>
                <OrderButton onClick={() => orderByAge()}>
                    Order by age
                </OrderButton>
                <OrderButton onClick={() => orderByVotes()}>
                    Order by votes
                </OrderButton>
            </ButtonsContainer>

            <CandidateListContainer>
                {candidates.map((candidate) => (
                    <CandidateListOne
                        key={candidate.id}
                        candidate={candidate}
                    />
                ))}
            </CandidateListContainer>
        </React.Fragment>
    );
}

const CandidateListContainer = styled.ul`
    list-style: none;
    padding: 0;
`;

const ButtonsContainer = styled.div`
    margin: 20px 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    @media only screen and (max-width: 550px) {
        justify-content: center;
    }
`;

const OrderButton = styled.button`
    padding: 10px;
    border: 1px solid #2d6be2;
    background-color: transparent;
    color: #2d6be2;
    margin: 0 10px;
    width: 150px;
    border-radius: 3px;
    font-weight: 600;
    font-size: 0.8em;
    outline: none;
    transition: 0.5s all;
    cursor: pointer;

    &:hover {
        background-color: #2d6be2;
        color: #fff;
    }
`;
