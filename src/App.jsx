import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterDetail from "@pages/CharacterDetail/CharacterDetail";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<p className="select-character">Select a character from the list.</p>} />
          <Route path="character/:id" element={<CharacterDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
