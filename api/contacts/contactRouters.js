const { Router } = require('express');

const ContactController = require('./contactControllerMongo');

const ContactRouter = Router();

ContactRouter.get('/', ContactController.getContactsController);

ContactRouter.get('/:contactId', ContactController.getContactByIdController);

ContactRouter.post('/', ContactController.createContactController);

ContactRouter.delete('/:contactId', ContactController.deleteContactController);

ContactRouter.patch('/', ContactController.updateContactController);

module.exports = ContactRouter;
