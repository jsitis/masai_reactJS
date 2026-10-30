import React, { useEffect, useState } from "react";

function QueryBasedPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const postsPerPage = 5;

  async function fetchPosts() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let result = await response.json();
    setPosts(result);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <h2>Posts (Page-{currentPage})</h2>
      <ul>
        {currentPosts.map((post) => (
          <p key={post.id}>
            Id: {post.id} <span>Title: {post.title}</span>
          </p>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
      </ul>
    </div>
  );
}

export default QueryBasedPagination;
