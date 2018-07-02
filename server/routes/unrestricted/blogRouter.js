const express = require('express');
const router = express.Router();

const Blogs = require("../../schemas/BlogSchema")


// "/api/blogs/"

const get = (req, res) => {
  Blogs
    .find()
    .populate('tag', { _id: 0 })
    .then(blogs => {
        res.status(200).json(blogs);
    })
    .catch(err => {
        res.status(500).json({Error: err.message});
    });
};

const post = (req, res) => {
  const { blog_title, blog_body, tag} = req.body
  Blogs
    .create({ blog_title, blog_body, tag })
    .then(blog => {
        res.status(201).json(blog);
    })
    .catch(err => {
        res.status(500).json({Error: err.message});
    });
};

const getID = (req, res) => {
    const { id } = req.params;
    
    Blogs
      .findById(id)
      .populate('tag', { _id: 0 })
      .then(blog => {
          res.status(200).json(blog);
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
};





router.route('/')
    .get(get)
    .post(post);

router.route('/:id')
    .get(getID)
    

module.exports = router;