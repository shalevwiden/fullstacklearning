import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Idpage from "./pages/Idpage";
import Page from "./pages/Page";

function App() {
  const [pages, setPages] = useState<number[]>([]);
  const [animals, setAnimals] = useState<string[]>([]);

  useEffect(() => {
    // fetch pages
    fetch("http://127.0.0.1:5000/api/pages")
      .then((res) => res.json())
      .then((data) => {
        // assuming pages are objects with 'id'
        setPages(data.map((p: any) => p.id));
      });

    // fetch animals
    fetch("http://127.0.0.1:5000/api/animals")
      .then((res) => res.json())
      .then((data) => setAnimals(data));
  }, []);

  return (
    <BrowserRouter>
      <nav>
        <h3>Pages</h3>
        {pages.map((id) => (
          <Link key={id} to={`/page/${id}`}>
            Page {id}
          </Link>
        ))}

        <h3>Animals</h3>
        {animals.map((name) => (
          <Link key={name} to={`/data/animals/${name}`}>
            {name}
          </Link>
        ))}
      </nav>

      <Routes>
        <Route path="/page/:id" element={<Page />} />
        <Route path="/data/:folder/:name" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
