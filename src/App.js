import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>Create React App + Go API - TEST BRANCH</h1>
      <h2>
        Deployed with{" "}
        <a
          href="https://zeit.co/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          ZEIT Now
        </a>
        !
      </h2>
      <p>
        <a
          href="https://github.com/zeit/now/tree/master/examples/create-react-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{" "}
        was bootstrapped with{" "}
        <a href="https://facebook.github.io/create-react-app/">
          Create React App
        </a>{" "}
        and contains three directories, <code>/public</code> for static assets,{" "}
        <code>/src</code> for components and content, and <code>/api</code>{" "}
        which contains a serverless <a href="https://golang.org/">Go</a>{" "}
        function. See{" "}
      </p>
    </main>
  );
}

export default App;
