import "./App.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Header, BookSingle, Footer, Checkout } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Register, Settings, Login, Home, AllBooks } from "./pages";
import { Context } from "./context/Context";
import {
  AdminBestSellers,
  AdminNewArrivals,
  AdminPreOrders,
  AdminAwardWinners,
  AdminFeaturedAuthors,
  AdminTextBooks,
  AdminAddBooks,
  AdminRemoveBooks,
} from "./pages/admin";

function App() {
  const [categories, setCategories] = useState([]);
  const { user } = useContext(Context);

  useEffect(() => {
    fetchCategories();
    return () => {};
  }, []);
  const fetchCategories = async () => {
    const res = await axios.get("/category");
    setCategories(res.data);
  };

  return (
    <div className="App">
      <Router>
        <Header categories={categories} />
        <Switch>
          <Route exact path="/">
            <Home categories={categories} />
          </Route>
          {/* <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route> */}
          <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/login">
            {user ? <Home categories={categories} /> : <Login />}
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/best-sellers-admin">
            <AdminBestSellers />
          </Route>
          <Route path="/new-arrivals-admin">
            <AdminNewArrivals />
          </Route>
          <Route path="/pre-orders-admin">
            <AdminPreOrders />
          </Route>
          <Route path="/award-winners-admin">
            <AdminAwardWinners />
          </Route>
          <Route path="featured-authors-admin">
            <AdminFeaturedAuthors />
          </Route>
          <Route path="/text-books-admin">
            <AdminTextBooks />
          </Route>
          <Route path="/add-books-admin">
            <AdminAddBooks categories={categories} />
          </Route>
          <Route path="/remove-books-admin">
            <AdminRemoveBooks />
          </Route>
          <Route path="/book">
            <AllBooks categories={categories} />
          </Route>
          <Route path="/singlebook/:bookId">
            <BookSingle categories={categories} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
