const MAL_CLIENT_ID = "2277fe3d95ad07465b541b0d7627822d";

document.addEventListener("DOMContentLoaded", main);

function main() {
    document.getElementById("submitButton").addEventListener("click", () => {
        const USERNAME = document.getElementById("usernameInput").textContent;
        submit(USERNAME);
    });
}

function submit(username) {
    const MAL_URL = `https://api.myanimelist.net/v2/users/${username}/animelist`;
    const REQ_HEADER = new Headers();
    REQ_HEADER.set('X-MAL-CLIENT-ID', MAL_CLIENT_ID);
    fetch(MAL_URL, {method: "GET", headers: REQ_HEADER}).then(response => {
        console.log(response);
    });
}