const router = require('express').Router();
const { User } = require('../../modles');


const router = require('express').Router();
const { User, Project, Card, Comment } = require("../../models");

// GET /api/users -- this is equivalent of "SELECT * FROM users;"
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    User.findAll({
      attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
      
});

//POST /api/users
router.post('/', (req, res) => {
    //expects {username: 'lernantino', email: 'larnantino@gmail.com', password: 'password1234'}
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


//PUT /api/users
router.put('/', (req, res) => {
    // expects {username: Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    // pass 
});

//DELETE /api/users/1
router.delete('/:id', (req, res) => {});

module.exports = router;