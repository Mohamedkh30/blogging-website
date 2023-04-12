const express = require("express")
const TopicController = require("./../Controllers/TopicController")

const router = express.Router();

router.route("/home")
    .get(TopicController.getAllTopics)

router.route("/topic")
    .post(TopicController.addTopic)

router.route("/topic/:id")
    .get(TopicController.getTopic)
    .delete(TopicController.deleteTopic)

module.exports = router

