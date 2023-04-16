const express = require("express")
const AuthorController = require("./../Controllers/AuthorController")
const {checkAuthor} = require("./../middlewares/AuthMW")


const router = express.Router();

router.route("/authors")
    .get(AuthorController.getAllAuthors)

router.route("/author")
    .patch(checkAuthor,AuthorController.updateAuthor)

router.route("/author/:id")
    .get(AuthorController.getAuthor)
    .delete(checkAuthor,AuthorController.deleteAuthor)

module.exports = router

