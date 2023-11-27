import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Favourites from "./pages/Favourites";
import Movies from "./pages/Movies";
import NoPage from "./pages/NoPage";

export default function App() {


  return (
    <div className="bg-[#191919]  h-screen">
      {/* <Featured/> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} exact />
          <Route path="/favourites" element={<Favourites />} exact />
          <Route path="/*" element={<NoPage />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
