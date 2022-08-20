const express = require('express');
const router = require('express-promise-router')()

const userController = require('../controllers/users')

const {validateParam, schemas, validateBody} = require('../helpers/routerHelpers')
router.route('/')
    .get(userController.index)
    .post(userController.newUser)

router.route('/signup').post(userController.signUp)

router.route('/signin').post(userController.signIn)

router.route('/secret').get(userController.seCret)

router.route('/:userID')
    .get(validateParam(schemas.idSchema),userController.getUser)
    .put(userController.replaceUser)
    .patch(userController.updateUser)
    

router.route('/:userID/decks')
    .get(userController.getUserDecks)
    .post(userController.newUserDecks)
    
module.exports = router