const express = require('express');
const router = express.Router();

const Cohorts = require("../../schemas/CohortSchema")


// "/api/cohorts/"

const get = (req, res) => {
  Cohorts
    .find()
    .then(cohorts => {
        res.status(200).json(cohorts);
    })
    .catch(err => {
        res.status(500).json({Error: err.message});
    });
};

const post = (req, res) => {
  const { cohort_name } = req.body
  Cohorts
    .create({ cohort_name })
    .then(cohort => {
        res.status(201).json(cohort);
    })
    .catch(err => {
        res.status(500).json({Error: err.message});
    });
};

const getID = (req, res) => {
    const { id } = req.params;
    
    Cohorts
      .findById(id)
      .then(cohort => {
          res.status(200).json(cohort);
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
};

const deleteID = (req, res) => {
    const { id } = req.params;

    Cohorts
      .findByIdAndRemove(id)
      .then(deletedCohort => {
          res.status(200).json({Success: `${id} successfully deleted from database`, deletedCohort})
      })
      .catch(err => {
          res.status(500).json({Error: err.message});
      });
};

const updateID = (req, res) => {
    const { id } = req.params;
    const { cohort_name } = req.body;

    Cohorts
      .findByIdAndUpdate(id, { cohort_name })
      .then(prevCohort => {
          res.status(200).json({Success: `${id} successfully updated`, prevCohort})
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