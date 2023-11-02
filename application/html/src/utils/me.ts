import Cookies from "js-cookie";

export function me() {
  if (Cookies.get("user")) {
    return JSON.parse(Cookies.get("user") || "");
  }
  return {};
}

export function setMe(object: any) {
  Cookies.set("user", JSON.stringify(object));
}