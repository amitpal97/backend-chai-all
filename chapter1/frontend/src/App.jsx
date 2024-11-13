import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get("/api/jokes").then((res) => {
      setJokes(res.data)
      console.log(res);


    }).catch((error) => {
      console.log("error", error);

    })
  }, [])
  console.log(jokes);


  return (
    <>
      <h1>Jokes Data : {jokes.length}</h1>
      {jokes.map((e) =>

        <div key={e.id} id={e.id} style={{ display: "flex", gap: "92%" }}>
          <p>{e.title}</p>
          <p>{e.content}</p>
        </div>
      )}
    </>

  )
}

export default App
