import {AuthContext} from "../context";
import {SERVER_ADDR} from "../config"
// body must be a string
export function postApi(path, body, isAuthorized = false) {
    const server_addr = SERVER_ADDR;
    return new Promise((resolve, reject) => {
        if (typeof body !== "string") return reject(new Error("Body must be a string"));
        const headers = {
            "Content-Type": "application/json",
            "Content-Length": body.length,
        };
        if (isAuthorized) {
            headers["Authorization"] = AuthContext.getToken();
        }
        fetch(`${server_addr}/${path}`, {
            method: "POST",
            headers: headers,
            body: body,
        }).then(async (response) => {
            resolve(await response.json());
        }).catch((err) => {
            reject(err);
        });
    });
}
