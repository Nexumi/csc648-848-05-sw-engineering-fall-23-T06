import Cookies from "js-cookie";

export function me() {
  return JSON.parse(Cookies.get("user") || "");
}

export function setMe(object: any) {
  Cookies.set("user", JSON.stringify(object));
}