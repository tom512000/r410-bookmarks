import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/extensions
import { fetchAllBookmarks } from "../services/api/bookmarks.js";
// eslint-disable-next-line import/extensions
import BookmarkItem from "./BookmarkItem.jsx";
// eslint-disable-next-line import/extensions
import paginationFromHydraView from "../services/transformers/paginationFromHydraView.js";

function BookmarksList() {
  const [bookmarksData, setBookmarksData] = useState([]);
  const [paginationData, setPaginationData] = useState(null);

  useEffect(() => {
    fetchAllBookmarks().then((data) => {
      setBookmarksData(data["hydra:member"]);
      setPaginationData(paginationFromHydraView(data["hydra:view"]));
    });
  }, []);

  return (
    <section>
      {bookmarksData.map((bookmark) => (
        <BookmarkItem data={bookmark} />
      ))}
      {paginationData && (
        <div className="pagination">
          <p>First page: {paginationData.first}</p>
          <p>Previous page: {paginationData.previous}</p>
          <p>Current page: {paginationData.current}</p>
          <p>Next page: {paginationData.next}</p>
          <p>Last page: {paginationData.last}</p>
        </div>
      )}
    </section>
  );
}

export default BookmarksList;
