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
//   console.log("New bucket: " + req.body.name)
  new Bucket({
    name: req.body.name,
    category: req.body.category
  }).save( (err, bucket) => {
    res.json(bucket);
  });
});

router.put('/:id', (req, res) => {
  let { name } = req.body;
  Bucket.findByIdAndUpdate(
      req.params.id,
      { $set: { name }},
      { new: true },
      (err, bucket) => {
      res.json(bucket);
  });
 });

router.delete('/:id', (req, res) => {
  let bucketId = req.params.id;
  Bucket.findById(bucketId, (err, bucket) => {
    bucket.remove();
    res.status(200).send({success: true});
  });
});

module.exports = router;