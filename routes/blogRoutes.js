const express = require('express');
const blogController = require('../controllers/blogController')
const router = express.Router();


// creating new blogs
router.get('/create', blogController.blog_create_get)

// POST request creating a new a blog
router.post('/', blogController.blog_create_post)

// Delete Blog
router.delete('/:id', blogController.blog_delete)

// Single Page
router.get('/:id', blogController.blog_single)

// blogs
router.get('/', blogController.blog_index)

module.exports = router;