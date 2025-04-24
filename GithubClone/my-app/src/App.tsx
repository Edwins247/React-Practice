import { Route, Routes } from "react-router-dom";

import Issue from "./pages/Issue";
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/issue" element={<Issue />} />
      </Routes>
    </>
  );
}

export default App;
