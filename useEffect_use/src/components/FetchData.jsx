import { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
        setLoading(true);
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        console.log(response);
        if (!response.ok) {
          throw new Error('Failed to Fetch');
        }
        let results = await response.json();
        setData(results);
        console.log(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      {data.slice(0, 5).map((post, index) => (
        <p key={post.id}>
          {index + 1}: {post.title}
        </p>
      ))}
    </>
  );
}

export default FetchData;
