export const GETCANDIDATES_REQUEST = "GETCANDIDATES_REQUEST";
export const GETCANDIDATES_SUCCESS = "GETCANDIDATES_SUCCESS";
export const GETCANDIDATES_FAILURE = "GETCANDIDATES_FAILURE";

export interface Candidate {
    id: number;
    firstname: string;
    lastname: string;
    photoURL: string;
    slogan: string;
    votes: number;
    age: number;
    update_at: string;
    create_at: string;
}

export type candidateAction = {
    type: string;
    data: Candidate;
};

export interface candidateLoading {
    type: typeof GETCANDIDATES_REQUEST;
}

export interface candidateSuccess {
    type: typeof GETCANDIDATES_SUCCESS;
    update?: boolean;
    idUpdated?: number;
    votes?: number;
    updatedAt?: string;
    payload: Candidate[];
}

export interface candidateFailure {
    type: typeof GETCANDIDATES_FAILURE;
    status: boolean;
    message: string;
}

export type symbols = "+" | "-";

export type dispatchType =
    | candidateSuccess
    | candidateLoading
    | candidateFailure;
