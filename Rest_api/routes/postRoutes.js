const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router(); // Tämän avulla reitittyy

router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createNewPost)
  .put(postControllers.updatePost)
  .delete(postControllers.deletedById); // Laitetaan tänne reitittymään kaikki eli GET, POST, PUT ja DELETE

router
  .route("/:id")
  .get(postControllers.getPostById)
  .put(postControllers.updatePost)
  .delete(postControllers.deletedById); // Reitittyminen ID:n perusteella GET, PUT ja DELETE

module.exports = router;
