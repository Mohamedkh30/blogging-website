const express = require("express")
const AuthorController = require("./../Controllers/AuthorController")

const router = express.Router();

router.route("/authors")
    .get(AuthorController.getAllAuthors)



router.route("/author")
    .patch(AuthorController.editAuthor)

router.route("/author/:id")
    .get(AuthorController.getAuthor)
    .delete(AuthorController.deleteAuthor)

module.exports = router

