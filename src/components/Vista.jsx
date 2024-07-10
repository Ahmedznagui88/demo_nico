import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://github.com/mdakram09/Periodic-Table-API-Made-Using-NodeJS-and-ExpressJS/blob/main/api/routes/db.json";

const Fetch = () => {
  const [element, setElement] = useState([]);
  const getData = async () => {
    const response = await axios.get(url);
    console.log(response);
  };
  useEffect(() => {}, []);
  getData();
  return (
    <>
      <ul>
        {element.map((item) => {
          return <li>
            name
          </li>;
        })}
      </ul>
    </>
  );
};

export default Fetch


