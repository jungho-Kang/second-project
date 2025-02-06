import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const getCookie = () => {
  return cookies.get("accessToken");
};

export const getCookieRefresh = () => {
  return cookies.get("refresh-token");
};

export const setCookie = (value, options) => {
  return cookies.set("accessToken", value, { ...options });
};

export const setCookieRefresh = (value, options) => {
  return cookies.set("refresh-token", value, { ...options });
};

export const removeCookie = options => {
  return cookies.remove("accessToken", { ...options });
};

export const removeCookieRefresh = options => {
  return cookies.remove("refresh-token", { ...options });
};
