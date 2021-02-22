import {
    Candidate,
    dispatchType,
    GETCANDIDATES_SUCCESS,
    GETCANDIDATES_REQUEST,
    GETCANDIDATES_FAILURE,
} from "../@types/candidateTypes";

interface defaultStateI {
    loading?: boolean;
    candidates?: Candidate[];
    message?: string;
    status?: boolean;
    update?: boolean;
    votes?: number;
    idUpdated?: number;
}

const defaultState = {
    loading: false,
};

export const candidateReducer = (
    state: defaultStateI = defaultState,
    action: dispatchType
): defaultStateI => {
    switch (action.type) {
        case GETCANDIDATES_SUCCESS:
            let candidatesInState: Candidate[] = state.candidates || [];

            // If user is voted we need execute a special props to update votes of certain user
            if (action.update) {
                candidatesInState = candidatesInState.map((candidate) => {
                    if (candidate.id === action.idUpdated) {
                        // Validate if action votes is not null
                        candidate.votes =
                            typeof action.votes === "number"
                                ? action.votes
                                : candidate.votes;
                        
                        // Validate if updated is not null, this is because i have a conflet because the reducer only acceps an array of candidades and props return only one
                        candidate.update_at =
                            action.updatedAt || candidate.update_at;
                    }
                    return candidate;
                });
            } else {
                candidatesInState = action.payload;
            }

            return {
                candidates: candidatesInState,
            };
        case GETCANDIDATES_REQUEST:
            return {
                loading: true,
            };
        case GETCANDIDATES_FAILURE:
            return {
                status: action.status,
                message: action.message,
            };
        default:
            return defaultState;
    }
};
