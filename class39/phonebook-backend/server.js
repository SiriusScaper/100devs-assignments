const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = 3001;

app.use(morgan('tiny'))

app.use(express.json())

app.use(cors())

let people = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/api/people', (req, res) => {
  res.json(people)
});

app.get('/info', (req, res) => {
  const currentDate = new Date()
  res.send(` <h2>Phonebook has info for ${people.length} people</h2> 
  <h2>${currentDate}</h2> `)
});

app.get('/api/people/:id', (req, res) => {
  const id = req.params.id;
  const entry = people.find(entry => entry.id == id);
  if (entry){
    res.json(entry)
  } else {
    res.status(404).end()
  }
});

app.post('/api/people', (req, res) => {
  const generatorId = () => {
    const maxId = people.length > 0 
    ? Math.max(...people.map(n => n.id)) 
    : 0
    return maxId + 1
  }
  
  const body = req.body;
  let entry = {
    id: generatorId(),
    body: body.name,
    number: body.number
  }

  if(!body.name) {
    return res.status(400).json({error: 'Name is missing'})
  }
  if(!body.number){
    return res.status(400).json({error: 'Number is missing'})
  }
  if(people.some(entry => entry.name === body.name)) {
    return res.status(409).json({error: 'Name must be unique'})
  }

  people.push(entry)
  res.json(entry)
});

app.delete('/api/people/:id', (req, res) => {
  const id = Number(req.params.id);
  people = people.filter(entry => entry.id !== id)
  res.status(204).end()
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});