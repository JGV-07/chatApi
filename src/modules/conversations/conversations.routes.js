const { Router } = require('express');
const { createConversation, createGroupConversation, getAllConversations } = require('./conversations.controllers');
const authenticate = require('../../middlewares/auth.middleware');


const router = Router();

// Crear conversaciones
// Obtener todas las conversaciones
// Obtener una conversacion con todos los mensajes

router.post("/", authenticate, createConversation);

router.get("/:id", authenticate, getAllConversations);

router.post("/group", authenticate, createGroupConversation)

module.exports = router;