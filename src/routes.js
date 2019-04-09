const express = require("express");
const multer = require ('multer')
const multerconfig = require('./config/multer')
const routes= express.Router();
const BoxControllers = require('./controllers/BoxControllers')
const FileControllers = require('./controllers/FileControllers')

routes.post ( '/boxes',BoxControllers.store)
routes.get ('/boxes/:id', BoxControllers.show)
routes.post ( '/boxes/:id/files', multer(multerconfig).single('file'),FileControllers.store)

module.exports =routes;