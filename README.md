# Express-Sequelize-API


API de estudo Express/Sequelize.

Simula um sistema de matricula de alunos.

Entidades: Alunos, Matriculas, Turmas, Niveis

Node 18v.
Sequelize 5.5.1v



Principais rotas para teste:

get('/pessoas', PessoaController.pegaTodasAsPessoas)

get('/pessoas/:id', PessoaController.pegaUmaPessoa)

post('/pessoas', PessoaController.criaPessoa)

put('/pessoas/:id', PessoaController.atualizaPessoa)

delete('/pessoas/:id', PessoaController.apagaPessoa)

get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.pegaUmaMatricula)

post('/pessoas/:estudanteId/matriculas', PessoaController.criaMatricula)

delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.apagaMatricula)
