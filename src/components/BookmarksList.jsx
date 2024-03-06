import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/extensions
import { fetchAllBookmarks } from "../services/api/bookmarks.js";

function BookmarksList() {
  const [bookmarksData, setBookmarksData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetchAllBookmarks().then((data) => {
        setBookmarksData(data);
      });
    };

    fetchData();
  }, []);

  return (
    <section>
      {bookmarksData.map((bookmark) => (
        <article key={bookmark.id}>{bookmark.name}</article>
      ))}
    </section>
  );
}

export default BookmarksList;
