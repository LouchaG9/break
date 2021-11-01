import http from "./httpService";
import jwtDecode from "jwt-decode";
import { apiUrl } from "../config.json";

const endpoint = `${apiUrl}/auth/signin`;
const signUpEndpoint = `${apiUrl}/auth/`;
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(endpoint, { email, password });
  localStorage.setItem(tokenKey, jwt.accessToken);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
  window.location = "/landing";
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export async function signUp(name, email, password) {
  const newUser = await http.post(signUpEndpoint, { name, email, password });
  console.log(newUser);
}

const exportObj = {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
};

export default exportObj;
