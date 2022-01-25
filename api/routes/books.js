const router = require("express").Router();
const Book = require("../models/Book");

//CREATE BOOK
router.post("/", async (req, res) => {
  const newBook = new Book(req.body);
  try {
    const saveBook = await newBook.save();
    res.status(200).json(saveBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

//ADD SPECIAL CATEGORY TO BOOK
router.put("/add/", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.body.id,
      {
        $push: { special: req.body.special },
      },
      { new: true }
    );
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

//REMOVE SPECIAL CATEGORY TO BOOK
router.put("/pop/", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.body.id,
      {
        $pull: { special: req.body.special },
      },
      { new: true }
    );
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE BOOK
router.delete("/", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.query.id);
    res.status(200).json("Book has been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET BOOK BY ID
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL BOOKS
router.get("/", async (req, res) => {
  try {
    let books;
    if (req.query.cat) {
      books = await Book.find({
        categories: {
          $in: [req.query.cat],
        },
      });
    } else if (req.query.special) {
      books = await Book.find({
        special: {
          $in: [req.query.special],
        },
      });
    } else {
      books = await Book.find();
    }
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
