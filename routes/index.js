const express = require('express');
const router = express.Router();
const PagesController = require('../controllers/PagesControllers');
const ApplicationsController = require('../controllers/ApplicationsController');

router.get('/', PagesController.home);
router.post('/applications',
    ApplicationsController.normalizeData,
    ApplicationsController.store);

router.get('/contact', PagesController.contact);
module.exports = router;