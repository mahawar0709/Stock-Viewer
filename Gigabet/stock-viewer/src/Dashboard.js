import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Info } from "./Info";

export const Dashboard = () => {
  const [data, setData] = useState([]);
  const url =
    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=X8ZEQ42643K2MTON";

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result["Time Series (5min)"]);
        console.log(result['Time Series (5min)']);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInfo();
  },[]);
  return (
    <div >
      <Box display="grid" gridTemplateColumns="repeat(4, 1fr)">
        {data && Object.entries(data).map(([key,value]) => {
          // console.log(key)
          return <Info  value ={key} data={data[key]} />
        })}
      </Box>
      
    </div>
  );
};
