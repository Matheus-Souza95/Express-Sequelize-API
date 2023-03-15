<h1> # Express-Sequelize-API </h1> 


<h2> API de estudo Express/Sequelize.</h2> 

Simula um sistema de matricula de alunos.

<h4><b> Entidades:</b></h4>  Alunos, Matriculas, Turmas, Niveis

Node 18v.
Sequelize 5.5.1v



<h4><b> Principais rotas para teste:</b></h4> 

get('/pessoas', PessoaController.pegaTodasAsPessoas)

get('/pessoas/:id', PessoaController.pegaUmaPessoa)

post('/pessoas', PessoaController.criaPessoa)

put('/pessoas/:id', PessoaController.atualizaPessoa)

delete('/pessoas/:id', PessoaController.apagaPessoa)

get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.pegaUmaMatricula)

post('/pessoas/:estudanteId/matriculas', PessoaController.criaMatricula)

delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.apagaMatricula)
