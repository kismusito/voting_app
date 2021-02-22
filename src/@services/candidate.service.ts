import axios from "axios";
import { environmentVars } from "../config/environment";
import { symbols } from "../@types/candidateTypes";

export const candidateService = {
    getCandidates,
    setVote,
};

async function getCandidates() {
    const request = await axios.get(environmentVars.API_URL + "api/candidates");
    return request.data;
}



async function setVote(candidateID: number, symbol: symbols) {
    const request = await axios.put(
        environmentVars.API_URL + "api/candidate/setVote",
        { candidateID, symbol }
    );
    return request.data;
}
