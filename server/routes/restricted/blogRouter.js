const express = require('express');
const router = express.Router();

const Blogs = require("../../schemas/BlogSchema");

// "/api/auth/" 

const deleteID = (req, res) => {
    const { id } = req.params;

    Blogs
      .findByIdAndRemove(id)
      .then(deletedBlog => {
          res.status(200).json({Success: `${id} successfully deleted from database`, deletedBlog})
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
};

const updateID = (req, res) => {
    const { id } = req.params;
    const { blog_title, blog_body } = req.body;

    Blogs
      .findByIdAndUpdate(id, { blog_title, blog_body })
      .then(prevBlog => {
          res.status(200).json({Success: `${id} successfully updated`, prevBlog})
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
};

router.route('/blogs/:id')
    .delete(deleteID)
    .put(updateID);


module.exports = router;