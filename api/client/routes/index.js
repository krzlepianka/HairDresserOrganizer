const express = require('express');
const clientController = require('../controller/index');
const authController = require('../../authentication/controller/index');
const router = express.Router();

router
  .route('/')
  .post(clientController.createUser)
  .get(authController.checkToken, clientController.getClients);

module.exports = router;
