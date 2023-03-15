const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

router.get('/Turmas', TurmaController.pegaTodasAsTurmas);
router.get('/Turmas/:id', TurmaController.pegaUmaTurma);
router.post('/Turmas', TurmaController.criaTurma);
router.put('/Turmas/:id', TurmaController.atualizaTurma);
router.delete('/Turmas/:id', TurmaController.apagaTurma);

module.exports = router;
