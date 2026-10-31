import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchdData } from "../redux/action";

const DataFetcher = () => {
    const { loading, data, error } = useSelector((state) => state);
    const dispatch = useDispatch();     

    useEffect(()=>{
        dispatch(fetchdData())
    }, [dispatch])



  return (
    <>
      <div>
        <h5>Async Data Fetching with Redux-Thunk</h5>
        {loading && <p>loading...</p>}
        {error && <p>error...</p>}
        {data && (
            <div>
                <h3>Fetched Data</h3>
                <p>{data.id}</p>
                <h2>Title: {data.title}</h2>

            </div>
        )}
      </div>
    </>
  );
};

export default DataFetcher;
