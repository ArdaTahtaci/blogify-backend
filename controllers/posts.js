import Post from "../models/posts.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(404).json({
            message: err.message,
        });
    }
};

export const createPost = async (req, res) => {

    const newPost = new Post(req.body)
    res.status(201).json(newPost)
    try {
        await newPost.save(newPost)

    } catch (err) {
        res.status(409).json({
            message: err.message
        })
    }
}

export const getById = async (req, res) => {

    try {
        const post = await Post.findOne({ postId: req.params.id })
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export const deletePost = async (req, res) => {
    try {
        const post = await Post.findOne({ postId: req.params.id })
        const response = await post.delete()
        res.status(204).json(response)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}