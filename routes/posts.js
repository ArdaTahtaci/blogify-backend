import express from "express";
import { getPosts, createPost, getById, deletePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getById);

router.post("/", createPost);

router.delete("/:id", deletePost);


export default router;