const Blog = require('../models/blogs');


const blog_create_post = (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
    .then((result) => {
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err);
    })
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create a new blog' });
}

const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect: '/blogs' })
    })
    .catch((err) => {
        console.log(err);
    })
}
const blog_single = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
        res.render('blogs/details', { blog: result, title: 'Single Blog'})
    })
    .catch((err) => {
        res.status(404).render('404', {title: 'Blog not found'})
    })
}

const blog_index = (req, res) => {
    Blog.find().sort( {createdAt: -1})
    .then((result) => {
        res.render('blogs/index', { title: 'All blogs', blogs: result})
    })
    .catch((err) => {
        console.log(err);
    })
}


module.exports = {
    blog_create_post,
    blog_delete,
    blog_single,
    blog_index,
    blog_create_get
}