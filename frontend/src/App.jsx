import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);


  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        console.log("Data received:", response.data); // ← add this to debug
        const data = Array.isArray(response.data) ? response.data : [];
        setJokes(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("/api/jokes")
  //     .then((response) => {
  //       setJokes(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  return (
    <>
      <h1>Sinha full stack</h1>
      <p>JOKES : {jokes.length} </p>

      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.punchline}</p>
          </div>
        ))    
      }


    </>
  );
}

export default App;
