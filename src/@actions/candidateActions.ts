import {
    dispatchType,
    GETCANDIDATES_SUCCESS,
    GETCANDIDATES_REQUEST,
    GETCANDIDATES_FAILURE,
    symbols,
} from "../@types/candidateTypes";
import { candidateService } from "../@services/candidate.service";
import { Dispatch } from "redux";

export const getCandidates = () => async (dispatch: Dispatch<dispatchType>) => {
    dispatch({
        type: GETCANDIDATES_REQUEST,
    });

    candidateService
        .getCandidates()
        .then((res) => {
            if (res.status) {
                dispatch({
                    type: GETCANDIDATES_SUCCESS,
                    update: false,
                    payload: res.candidates,
                });
            } else {
                dispatch({
                    type: GETCANDIDATES_FAILURE,
                    message: res.message,
                    status: res.status,
                });
            }
        })
        .catch((err) => {});
};

export const setVote = (candidateID: number, voteAction: symbols) => async (
    dispatch: Dispatch<dispatchType>
) => {
    candidateService
        .setVote(candidateID, voteAction)
        .then((res) => {
            if (res.status) {
                dispatch({
                    type: GETCANDIDATES_SUCCESS,
                    update: true,
                    idUpdated: res.candidate.id,
                    votes: res.candidate.votes,
                    updatedAt: res.candidate.update_at,
                    payload: [res.candidate],
                });
                
            } else {
                console.log("No se pudo votar")
            }
        })
        .catch((err) => {
            console.log(err)
        });
};
