import { BASE_URL } from "../api/bookmarks";

function paginationFromHydraView(hydraview) {
  if (hydraview["hydra:last"] == null) return null;
  const current = new URL(
    `${BASE_URL}${hydraview["@id"]}` ?? "",
  ).searchParams.get("page");
  const first = new URL(
    `${BASE_URL}${hydraview["hydra:first"]}` ?? "",
  ).searchParams.get("page");
  const previous = new URL(
    `${BASE_URL}${hydraview["hydra:previous"]}` ?? "",
  ).searchParams.get("page");
  const next = new URL(
    `${BASE_URL}${hydraview["hydra:next"]}` ?? "",
  ).searchParams.get("page");
  const last = new URL(
    `${BASE_URL}${hydraview["hydra:last"]}` ?? "",
  ).searchParams.get("page");
  return {
    current,
    first,
    previous,
    next,
    last,
  };
}

export default paginationFromHydraView;
