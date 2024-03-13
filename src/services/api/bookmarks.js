export const BASE_URL = "https://iut-rcc-infoapi.univ-reims.fr/bookmarks";

function fetchAllBookmarks() {
  return fetch(`${BASE_URL}/bookmarks`).then((response) => response.json());
}

export function avatarUrl(userId) {
  const data = fetch(`${BASE_URL}${userId}`).then((response) =>
    response.json(),
  );

  return `${BASE_URL}/users/${data.id}/avatar`;
}

export { fetchAllBookmarks };
