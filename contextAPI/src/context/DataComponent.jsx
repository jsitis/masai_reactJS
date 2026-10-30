import React, { useContext } from "react";
import { DataContext } from "./DataProvider";

export function DataComponent() {
  const { state, fetchData } = useContext(DataContext);
  console.log(state)

  return(
    <div>
        <button onClick={fetchData}>Fetch Data</button>
        {state.loading && <p>Loading...</p>}
        {state.error && <p>Error: {state.error}</p>}
        {state.data && state.data.slice(0, 10).map(post =><p key={post.id}>{post.id}. {post.title}</p>)}
    </div>
  )
}
