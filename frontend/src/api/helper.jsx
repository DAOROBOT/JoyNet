import {AuthContext} from "../context";
import {SERVER_ADDR} from "../config"

// body must be a string
export function postApi(path, body, isAuthorized = false) {
  const server_addr = SERVER_ADDR;
  return new Promise((resolve, reject) => {
    if (typeof body !== "string") return reject(new Error("Body must be a string"));
    if (typeof path !== "string") return reject(new Error("Path must be a string"));

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

// params: object of key value pair
export function getApi(path, params, isAuthorized = false) {
  const server_addr = SERVER_ADDR;
  return new Promise((resolve, reject) => {
    if (typeof path !== "string") return reject(new Error("Path must be a string"));
    if (typeof params !== "object") return reject(new Error("Params must be an object"));

    const headers = { };
    if (isAuthorized) {
      headers["Authorization"] = AuthContext.getToken();
    }

    const paramsString = (new URLSearchParams(params)).toString();
    fetch(`${server_addr}/${path}?${paramsString}`, {
      method: "GET",
      headers: headers
    }).then(async (response) => {
      resolve(await response.json());
    }).catch((err) => {
      reject(err);
    });
  });
}

export function parseMilis(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  // return new Date(timestamp).toISOString()
}
