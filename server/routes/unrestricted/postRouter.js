const express = require('express');
const router = express.Router();

const Posts = require("../../schemas/PostSchema")


// "/api/posts/"

const get = (req, res) => {
  Posts
    .find()
    .populate('tag', { _id: 0 })
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(err => {
        res.status(500).json({Error: err.message});
    });
};

const post = (req, res) => {
  const { post_title, post_body, tag} = req.body
  Posts
    .create({ post_title, post_body, tag })
    .then(post => {
        res.status(201).json(post);
    })
    .catch(err => {
        res.status(500).json({Error: err.message});
    });
};

const getID = (req, res) => {
    const { id } = req.params;
    
    Posts
      .findById(id)
      .populate('tag', { _id: 0 })
      .then(post => {
          res.status(200).json(post);
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
};

const deleteID = (req, res) => {
    const { id } = req.params;

    Posts
      .findByIdAndRemove(id)
      .then(deletedPost => {
          res.status(200).json({Success: `${id} successfully deleted from database`, deletedPost})
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
};

const updateID = (req, res) => {
    const { id } = req.params;
    const { post_title, post_body } = req.body;

    Posts
      .findByIdAndUpdate(id, { post_title, post_body })
      .then(prevPost => {
          res.status(200).json({Success: `${id} successfully updated`, prevPost})
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
    .delete(deleteID)
    .put(updateID);

module.exports = router;