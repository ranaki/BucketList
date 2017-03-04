const express = require('express');
const router = express.Router();
const Bucket = require('../models/bucket');
const List = require('../models/list');
const Card = require('../models/card');

router.get('/', (req, res) => {
  console.log("buckets here");
  Bucket.find( ( err, buckets ) => {
    res.json(buckets);
  });
});

router.post('/', (req, res) => {
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


router.get('/:id', (req, res) => {
  console.log("get bucket by id")
  Bucket.findById(req.params.id, (err, bucket) => {
    res.render('bucket', { bucket })
  })
});

module.exports = router;