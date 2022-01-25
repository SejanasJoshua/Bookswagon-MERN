import React from "react";

const Admin = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchBooks();
    console.log("bokey: ", bokey);
    return () => {};
  }, []);
  useEffect(() => {
    return () => {};
  }, [books]);
  const fetchBooks = async () => {
    try {
      const res = await axios.get("/book/?bookType=new-arrivals");
      setBooks(res.data);
      console.log("books", books);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <button>New Arrivals</button>
    </div>
  );
};

export default Admin;
