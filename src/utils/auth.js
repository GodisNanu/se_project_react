const Base_Url = "http://localhost:3001";

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error:${res.status}`);
};

const signup = (name, avatar, email, password) => {
  return fetch(`${Base_Url}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      avatar,
      email,
      password,
    }),
  }).then(handleServerResponse);
};

const signin = (email, password) => {
  return fetch(`${Base_Url}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(handleServerResponse);
};

const checkToken = (jwt) => {
  return fetch(`${Base_Url}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  }).then(handleServerResponse);
};

const auth = { signin, signup, checkToken };

export default auth;
