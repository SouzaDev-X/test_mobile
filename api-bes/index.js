// Arquivo: api-bes/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
// Nosso "banco de dados" temporário
const cursos = [
{ id: 1, nome: 'React Native para Iniciantes'
, area: 'Mobile' },
{ id: 2, nome: 'Node.js, Express e MongoDB'
, area: 'Backend' },
];
// Rota principal para obter todos os cursos
app.get('/cursos', (req, res) => {
  res.json(cursos);
});

// Rota para obter um curso específico por ID
app.get('/cursos/:id', (req, res) => {
  const { id } = req.params;
  const curso = cursos.find(c => c.id == id);
  
  if (!curso) {
    return res.status(404).json({ message: 'Curso não encontrado.' });
  }
  
  res.json(curso);
});

app.post('/cursos'
, (req, res) => {
// O middleware express.json() transforma o JSON enviado em req.body
const { nome, area } = req.body;
if (!nome || !area) {
return res.status(400).json({ message: 'Dados incompletos.' });
}
const novoCurso = {
id: Date.now(), // ID único simples
nome,
area,
};
cursos.push(novoCurso);
res.status(201).json(novoCurso); // 201: Created
});
// Em api-bes/index.js
app.delete('/cursos/:id'
, (req, res) => {
const { id } = req.params; // Pega o ID da URL
const index = cursos.findIndex(c => c.id == id);
if (index === -1) {
return res.status(404).json({ message: 'Curso não encontrado.' });
}
cursos.splice(index, 1); // Remove o item do array
res.status(204).send(); // 204: No Content (sucesso, sem conteúdo para retornar)
});
// Em api-bes/index.js
app.delete('/cursos/:id'
, (req, res) => {
const { id } = req.params; // Pega o ID da URL
const index = cursos.findIndex(c => c.id == id);
if (index === -1) {
return res.status(404).json({ message: 'Curso não encontrado.' });
}
cursos.splice(index, 1); // Remove o item do array
res.status(204).send(); // 204: No Content (sucesso, sem conteúdo para retornar)
});
// Em api-bes/index.js
app.put('/cursos/:id'
, (req, res) => {
const { id } = req.params;
const { nome, area } = req.body;
const curso = cursos.find(c => c.id == id);
if (!curso) {
return res.status(404).json({ message: 'Curso não encontrado.' });
}
curso.nome = nome || curso.nome; // Atualiza se o novo valor for enviado
curso.area = area || curso.area;
res.json(curso);
});
// Inicia o servidor para ouvir na porta 3000
app.listen(port, () => {
console.log(`Servidor da API BES rodando em http://localhost:${port}`);
});
