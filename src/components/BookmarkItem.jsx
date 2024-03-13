import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
// eslint-disable-next-line import/extensions
import Rating from "./Rating.jsx";
// eslint-disable-next-line import/extensions
import { BASE_URL, avatarUrl } from "../services/api/bookmarks.js";

function BookmarkItem({ data }) {
  return (
    <section>
      <Rating value={data.rateAverage} />
      <article>
        <a href={`${BASE_URL}/bookmarks/${data.id}`}>{data.name}</a>
      </article>
      <img src={avatarUrl(data.owner)} alt="Avatar de l'utilisateur" />
    </section>
  );
}

BookmarkItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rateAverage: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookmarkItem;
