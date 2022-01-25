import React, { useEffect, useState } from "react";
import { Sidebar, Banner, HomeSections } from "../components";
import "./Home.css";
import axios from "axios";

const Home = ({ categories }) => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [awardWinners, setAwardWinners] = useState([]);
  useEffect(() => {
    fetchBooks();
    document.title = "BooksWagon";
    return () => {};
  }, []);
  const fetchBooks = async () => {
    try {
      const res1 = await axios.get("/special/?special=new-arrivals");
      setNewArrivals(res1.data);
      const res2 = await axios.get("/special/?special=best-sellers");
      setBestSellers(res2.data);
      const res3 = await axios.get("/special/?special=award-winners");
      setAwardWinners(res3.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div className="homeBody">
        <div className="sidebar">
          <Sidebar categories={categories} />
        </div>
        <div className="homeContainer">
          <Banner />
          <div className="sections">
            <HomeSections title="Best Sellers" books={bestSellers} />
            <HomeSections title="New Arrivals" books={newArrivals} />
            <HomeSections title="Award Winners" books={awardWinners} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
