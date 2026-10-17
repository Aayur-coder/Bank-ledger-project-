const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const accoutController = require("../controllers/account.controller")

const router = express.Router();

/**
 *  Post /api/accounts/
 *  Create a new account
 */

router.post("/", authMiddleware.authMiddleware,accoutController.createAccountController);
module.exports = router;
