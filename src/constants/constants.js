export const BASEURL =
  window.location.hostname === "localhost" ? "http://localhost:3000" : "/api";
export const GENDER = [
  { name: "", value: null },
  {
    name: "Male",
    value: "male",
  },
  {
    name: "Female",
    value: "female",
  },
  {
    name: "Other",
    value: "other",
  },
];
class NavLinks {
  constructor(name, to) {
    this.name = name;
    this.to = to;
  }
}
export const NAV_LINKS = [
  new NavLinks("Profile", "/profile"),
  new NavLinks("Connection", "/connection"),
  new NavLinks("Requests", "/requests"),
  new NavLinks("Explore", "/"),
];
