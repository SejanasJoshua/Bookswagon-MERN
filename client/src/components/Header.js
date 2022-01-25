import React, { useState, useContext } from "react";
import "./Header.css";
import Logo from "../assets/headerLogo.png";
import { IoHome, IoSearch, IoCart } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useStateValue } from "../context/CartProvider";

const Header = ({ categories }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);

  const [{ basket }] = useStateValue();

  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    alert("Logged Out");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav>
      <div className="header">
        <div className="logo">
          <Link className="link" to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="searchBar">
          <input
            type="text"
            className="searchBar"
            placeholder="Search by Title, Author, Publisher or ISBN"
          />
          <button className="searchButton">
            <IoSearch />
          </button>
        </div>
        <div className="login">
          <ul>
            <li
              className="loginLink"
              style={{
                alignItems: "center",
                display: "flex",
              }}
            >
              {user ? (
                <Dropdown
                  onMouseLeave={() => setShowAccountDropdown(false)}
                  onMouseOver={() => setShowAccountDropdown(true)}
                >
                  <Dropdown.Toggle className="main-style" id="dropdown-basic">
                    <span>{user.email}</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu show={showAccountDropdown}>
                    <Dropdown.Item>
                      <Link className="link" to="/settings">
                        Account
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link className="link" to="/settings">
                        My Addresses
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link className="link" to="/settings">
                        Change Password
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link className="link" to="/settings">
                        Personal Settings
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link className="link" to="/login">
                        <span onClick={handleLogout}>Logout</span>
                      </Link>
                    </Dropdown.Item>
                    {user.userType === "admin" ? (
                      <div>
                        <Dropdown.Item>
                          <Link className="link" to="/new-arrivals-admin">
                            Admin Controls
                          </Link>
                        </Dropdown.Item>
                      </div>
                    ) : null}
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link className="link" to="/login">
                  <span>Login</span>
                </Link>
              )}
            </li>
            <li>
              {user ? null : (
                <Link className="link" to="/register">
                  <span>Signup</span>
                </Link>
              )}
            </li>
          </ul>
          <span className="userIcon">
            <FaUserAlt />
          </span>
        </div>
        <div className="cart">
          <div className="items">{basket?.length}</div>
          <div className="cartIcon">
            <Link className="link" to="/checkout">
              <IoCart />
            </Link>
          </div>
        </div>
      </div>
      <div className="main-navigation">
        <div className="navigation-bar">
          <ul>
            <li>
              <a>
                <Link className="link" to="/">
                  <IoHome />
                </Link>
              </a>
            </li>
            <li>
              <Dropdown
                onMouseLeave={() => setShowDropdown(false)}
                onMouseOver={() => setShowDropdown(true)}
              >
                <Dropdown.Toggle className="main-style" id="dropdown-basic">
                  Books
                </Dropdown.Toggle>

                <Dropdown.Menu show={showDropdown}>
                  {categories.map((category, index) => (
                    // <Dropdown.Item key={index}>{category.name}</Dropdown.Item>
                    <Dropdown.Item key={index}>
                      <Link to={`/book/?cat=${category.name}`} className="link">
                        <li className="sidebarListItem">{category.name}</li>
                      </Link>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <a>
                <Link to={"/book/?special=new-arrivals"} className="link">
                  New Arrivals
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link to={"/book/?special=pre-orders"} className="link">
                  Pre-Order
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link to={"/book/?special=best-sellers"} className="link">
                  Best Sellers
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link to={"/book/?special=text-books"} className="link">
                  Text Books
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link to={"/book/?special=award-winners"} className="link">
                  Award Winners
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link to={"/book/?special=featured-authors"} className="link">
                  Featured Authors
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link className="link" to="/book">
                  All Books
                </Link>
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="currency">Currency</div> */}
      </div>
    </nav>
  );
};

export default Header;
