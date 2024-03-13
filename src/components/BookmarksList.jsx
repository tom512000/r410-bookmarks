import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/extensions
import { fetchAllBookmarks } from "../services/api/bookmarks.js";
// eslint-disable-next-line import/extensions
import BookmarkItem from "./BookmarkItem.jsx";

function BookmarksList() {
  const [bookmarksData, setBookmarksData] = useState([]);

  useEffect(() => {
    fetchAllBookmarks().then((data) => {
      setBookmarksData(data["hydra:member"]);
    });
  }, []);

  return (
    <section>
      {bookmarksData.map((bookmark) => (
        <BookmarkItem data={bookmark} />
      ))}
    </section>
  );
}

export default BookmarksList;
