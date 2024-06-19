import { Rider } from "./entityFacade";

const API_URL = "http://localhost:8080/";
const RIDER_URL = API_URL + "api/riders";
const TEAM_URL = API_URL + "api/teams";

//Product fetches the products from the backend and returns them as a JSON object.
async function getAllRiders() {
    return fetch(RIDER_URL).then((res) => res.json());
}

async function getAllTeams() {
    return fetch(TEAM_URL).then((res) => res.json());
}

async function createRider(rider: Rider) {
    return fetch(RIDER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rider),
    }).then((res) => res.json());
}

export { getAllRiders, getAllTeams, createRider };
