import React, { useState, useRef } from "react";
import { AdminSidebar } from "../../components";
import "./AdminAddBooks.css";
import "../../components/Admin.css";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
// import { Card } from "../../assets";

const AdminAddBooks = ({ categories }) => {
  const [error, setError] = useState(false);
  const [errorData, setErrorData] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [file, setFile] = useState(null);

  const titleRef = useRef();
  const authorRef = useRef();
  const publisherRef = useRef();
  const priceRef = useRef();
  const aboutRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      publisher: publisherRef.current.value,
      price: priceRef.current.value,
      about: aboutRef.current.value,
      categories: selectedCategories,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newBook.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/book/", newBook);
      alert("Update Successfull.");
      titleRef.current.value = "";
      authorRef.current.value = "";
      publisherRef.current.value = "";
      priceRef.current.value = "";
      aboutRef.current.value = "";
      setSelectedCategories([]);
      setFile(null);
    } catch (err) {
      setError(true);
      setErrorData(err.response.data);
    }
  };
  return (
    <div>
      <div className="outerContainerAdmin">
        <div className="containerAdmin">
          <div className="titleAdmin">
            <h2>Add Books</h2>
          </div>
          <div className="innerGridAdmin" style={{ margin: "0 0 100px 0" }}>
            <AdminSidebar />
            <div className="innerContainerAdmin">
              <form>
                <div className="settingsAddressSubContainer">
                  <label>Select Image</label>
                  <label htmlFor="fileInput">
                    <FaPlus />
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  {file && (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Card Image"
                      className="uploadImage"
                    />
                  )}
                </div>
                <div className="settingsAddressSubContainer">
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" required ref={titleRef} />
                </div>
                <div className="settingsAddressSubContainer">
                  <label htmlFor="author">Author</label>
                  <input type="text" id="author" required ref={authorRef} />
                </div>
                <div className="settingsAddressSubContainer">
                  <label htmlFor="publisher">Publisher</label>
                  <input
                    type="text"
                    id="publisher"
                    required
                    ref={publisherRef}
                  />
                </div>
                <div className="settingsAddressSubContainer">
                  <label htmlFor="price">Price</label>
                  <input type="text" id="publisher" required ref={priceRef} />
                </div>
                <div className="settingsAddressSubContainer">
                  <label htmlFor="About">About</label>
                  <li></li>
                  <textarea
                    name=""
                    id="About"
                    rows="5"
                    required
                    ref={aboutRef}
                  ></textarea>
                </div>
                <div className="settingsAddressSubContainer">
                  <label htmlFor="About">Select Categories</label>
                  <select id="myList">
                    {categories.map((category, index) => (
                      <option key={index}>{category.name}</option>
                    ))}
                  </select>
                </div>

                <div className="settingsAddressSubContainer">
                  <li></li>
                  <li></li>
                  <div>
                    <button
                      style={{ margin: "10px", padding: "10px" }}
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedCategories([
                          ...selectedCategories,
                          document.getElementById("myList").options[
                            document.getElementById("myList").selectedIndex
                          ].value,
                        ]);
                      }}
                    >
                      Add Category
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      style={{ margin: "10px", padding: "10px" }}
                      onClick={() => {
                        setSelectedCategories([]);
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </div>

                <div className="settingsAddressSubContainer">
                  <label htmlFor="About">Categories</label>
                  <li></li>
                  <div>
                    {selectedCategories.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </div>
                <div className="settingsAddressSubContainer">
                  <button onClick={handleSubmit}>Add Book</button>
                </div>
                {error && (
                  <span style={{ color: "red", marginTop: "10px" }}>
                    {errorData}
                  </span>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddBooks;
