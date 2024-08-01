const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//mongoDb connection string
const dbURI = 'mongodb+srv://Dennis:Loading123@familyblog.7we22zp.mongodb.net/Family-blog?retryWrites=true&w=majority&appName=FamilyBlog';
mongoose.connect(dbURI)
    .then((result) => app.listen(4000))
    .catch((err) => console.log(err))

// view engine
app.set('view engine', 'ejs');

//Get request
// Home page route
app.get('/', (req, res) => {       
res.redirect('blogs')
})

//middleware
app.use(express.static('public'));
app.use(express.urlencoded( { extended: true}))

//About page route
app.get('/about', (req, res) => {
res.render('about', { title: 'About' });
})

app.use('/blogs', blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})