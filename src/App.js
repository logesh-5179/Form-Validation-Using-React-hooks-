import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
  
 }, []);

  return (
    <div className="App">
      <h1>FETCHING API</h1>
     
        {data.map((dataObj) => {
          return (
            <div >
              <ul>
             <li>ID:{dataObj.id} </li>
              <li> Name:  {dataObj.title} </li>
             <li> Url: {dataObj.url}</li>
            <li>thumbnail :<a href="https://via.placeholder.com/150/771796">{dataObj.thumbnailUrl}</a></li>
              </ul>
            </div>
          );
        })}
    
    </div>
  );
}

export default App;