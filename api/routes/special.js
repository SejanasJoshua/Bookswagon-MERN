const router = require("express").Router();
const Book = require("../models/Book");

const Special = require("../models/Special");

//ADD
router.post("/", async (req, res) => {
  const newSpecial = new Special(req.body);
  try {
    const saveRecord = await newSpecial.save();
    res.status(200).json(saveRecord);
  } catch (err) {
    res.status(500).json(err);
  }
});

//REMOVE
router.delete("/:id", async (req, res) => {
  try {
    const special = await Special.findByIdAndDelete(req.params.id);
    res.status(200).json("Record has been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
router.get("/", async (req, res) => {
  try {
    let books;
    if (req.query.nin) {
      books = await Book.find({
        special: {
          $nin: [req.query.special],
        },
      });
    } else {
      books = await Book.find({
        special: {
          $in: [req.query.special],
        },
      });
    }

    res.status(200).json(books);
  } catch {
    res.status(400).json("No Books Found");
  }
});

module.exports = router;
