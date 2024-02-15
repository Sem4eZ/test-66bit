import Header from "./components/Header";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/employee/:id" element={<ProfileEmployee />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
