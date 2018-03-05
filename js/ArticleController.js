const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Article = require('./Articles');

//Creates a new article

router.post('/newArticle', function(req, res) {
    Article.create(
        {
            title: req.body.title,
            textPost: req.body.textPost,
            datePost: new Date(),
            author: req.body.author
        },
        function(err, article) {
            if (err)
                return res
                    .status(500)
                    .send(
                        'There was a post problem adding the information to the database.'
                    );
            res.status(200).send('Post method succeeded');
        }
    );
});

//Returns all the article in the database
router.get('/getAllArticles', function(req, res) {
    Article.find({}, function(err, articles) {
        if (err) return res.status(500).send('There was a problem finding the articles.');
        res.status(200).send(articles);
    });
});

//Gets a single user from the database
router.get('/:id', function(req, res) {
    Article.findByIdAndUpdate(req.params.id, req.params.body, { new: true }, function(
        err,
        article
    ) {
        if (err) return res.status(500).send('There was a problem updating the user.');
        //res.status(200).send(article);
        res.status(200).send(article.textPost);
    });
});

module.exports = router;
