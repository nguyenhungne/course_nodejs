const express = require('express');
const router = express.Router();

const CourseController = require('../app/controllers/CourseController.js');

router.get('/create', CourseController.create);
router.post('/store', CourseController.store);
router.get('/:id/edit', CourseController.edit);
router.put('/:id', CourseController.update);
router.delete('/:id', CourseController.delete);
router.get('/:slug', CourseController.show);

module.exports = router;
