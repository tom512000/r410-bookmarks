export const BASE_URL = "https://iut-rcc-infoapi.univ-reims.fr";

export function fetchAllBookmarks() {
  return fetch(`${BASE_URL}/bookmarks/bookmarks`).then((response) => response.json());
}

export function avatarUrl(userId) {
  return `${BASE_URL}${userId}/avatar`;
}
