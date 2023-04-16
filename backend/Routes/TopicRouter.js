const express = require("express")
const TopicController = require("./../Controllers/TopicController")
const {checkAuthor} = require("./../middlewares/AuthMW")

const router = express.Router();

router.route("/home")
    .get(TopicController.getAllTopics)

router.route("/topic")
    .post(checkAuthor,TopicController.addTopic)

router.route("/topic/:id")
    .get(TopicController.getTopic)
    .delete(checkAuthor,TopicController.deleteTopic)

module.exports = router

