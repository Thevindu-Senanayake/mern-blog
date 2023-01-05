const express = require("express");
const Post = require("../models/post");

const router = express.Router();

// saving new post
module.exports = router.post("/post/save", (req, res) => {
    let newPost = new Post(req.body);

    newPost.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        return res.status(200).json({
            success: "Post saved successfully",
        });
    });
});

// get all posts
module.exports = router.get("/posts", (req, res) => {
    Post.find().exec((err, post) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        return res.status(200).json({
            success: true,
            existingPost: post,
        });
    });
});

// updating specific post
module.exports = router.put("/post/update/:id", (req, res) => {
    Post.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (err, post) => {
            if (err) {
                return res.status(400).json({
                    error: err,
                });
            }
            return res.status(200).json({
                success: "Post updated successfully",
            });
        }
    );
});

// deleting specific post
module.exports = router.delete("/post/delete/:id", (req, res) => {
    Post.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        return res.status(200).json({
            success: "Post deleted successfully", deletedPost
        });
    });
});

// get specific post
module.exports = router.get("/post/:id", (req, res) => {

    let postId = req.params.id;

    Post.findById(postId, (err, post) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err,
            });
        }
        return res.status(200).json({
            success: true,
            post
        });
    });
});