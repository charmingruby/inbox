const { Router } = require('express');

const ContactController = require('./app/controllers/ContactControllers');

const router = Router();

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);
router.delete('/contacts', ContactController.store);

module.exports = router;
