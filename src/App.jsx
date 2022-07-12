import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { HomePage, NotFoundPage, DetailsPage, BookmarksPage } from "./pages";
import { categories } from "../mocks";

import { Header, Filter, Footer } from "./components";
import { useContext } from "react";
import { AppContext } from "./context/AppProvider";

function App() {
  const context = useContext(AppContext);

  return (
    <div className="text-white bg-black font-sans text-xl leading-snug font-normal min-h-screen">
      <BrowserRouter>
        <Header></Header>
        <Filter items={categories}></Filter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="movies" element={<HomePage />}></Route>
          <Route path="bookmarks" element={<BookmarksPage />}></Route>
          <Route
            path="movies/details/:movieId"
            element={<DetailsPage />}
          ></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
