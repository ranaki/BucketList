const express = require('express');
const router = express.Router();
const Bucket = require('../models/bucket');

router.get('/', (req, res) => {
  console.log("buckets here");
  Bucket.find( ( err, buckets ) => {
    res.json(buckets);
  });
});

router.post('/', (req, res) => {
  console.log("New bucket: " + req.body.name)
  new Bucket({
    name: req.body.name
  }).save( (err, bucket) => {
    res.json(bucket);
  });
});

module.exports = router;