const express = require('express');
const { getHomepage, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController')
const { getABC } = require('../controllers/homeController')
const { getPresent111, postCreateUser, getCreatePage   } = require('../controllers/homeController')
const router = express.Router();

// router.Method('/route',handler)

router.get('/', getHomepage);
router.get('/abc', getABC);
router.post('/create-user', postCreateUser);
router.get('/update/:id', getUpdatePage);
router.get('/create', getCreatePage);
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user/', postHandleRemoveUser);
module.exports = router;