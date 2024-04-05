import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Saved from "./components/Saved";
import Error from "./components/Error";

const App = () => {
  const [images, setImages] = useState([]); //array to store images fetched from API
  const [search, setSearch] = useState("nature");
  const [loader, setloader] = useState(true);
  const [saved, setSaved] = useState([]);

  const Api_Key = "XZqQSg9sBGA8MmNtVwsBXrZx21ZZB1jdUn8ec3ePZlUGDSnxnWc13Kmu";

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: Api_Key,
          },
        }
      );
      // console.log(res.data.photos);
      setImages(res.data.photos);
      setloader(false);
      console.log(images);
    };
    fetchData();
  }, [search]);

  return (
    <>
      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                images={images}
                loader={loader}
                saved={saved}
                setSaved={setSaved}
              />
            }
          />
          <Route
            path="/saved"
            element={<Saved saved={saved} loader={loader} />}
          />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
