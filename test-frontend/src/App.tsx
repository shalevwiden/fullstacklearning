import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Page from "./pages/Page";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/page/1">Page 1</Link> | <Link to="/page/2">Page 2</Link> |{" "}
        <Link to="/page/3">Page 3</Link>
      </nav>

      <Routes>
        <Route path="/page/:id" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
