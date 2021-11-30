import express from "express";

import {
  getPosts,
  getPostsBySearch,
  createPost,
  updatePost,
  deletePost,
  likePost,
  commentPost,
  getPost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";
const router = express.Router();

//starting route
//using middleware auth as a gateway
//for verified users to be able to perform actions

//order of routing is very important here
//because of redirect in app.js in the frontend

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);

router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);

export default router;
