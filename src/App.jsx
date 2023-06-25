import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const html = document.querySelector("html");
  html.classList.add("dark");
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}
