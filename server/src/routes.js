const { Router } = require('express');

const ContactController = require('./app/controllers/ContactControllers');

const router = Router();

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);
router.delete('/contacts/:id', ContactController.delete);

router.get('/categories');
router.get('/categories');
router.post('/categories');
router.put('/categories');
router.delete('/categories');

module.exports = router;
