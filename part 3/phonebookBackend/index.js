require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
// const mongoose = require('mongoose')
const Person = require('./models/person')

app.use(express.json())
app.use(express.static('dist'))
app.use(morgan('tiny'))

// const password = process.argv[2]
// const url = `mongodb+srv://fullstack:${password}@cluster0.p0cyfof.mongodb.net/personApp?retryWrites=true&w=majority&appName=Cluster0`

// mongoose.set('strictQuery',false)
// mongoose.connect(url)

// const personSchema = new mongoose.Schema({
//     name: String,
//     number: String,
//   })

// personSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })

// const Person = mongoose.model('Person', personSchema)

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })

const getDateTime = () => {
    var date = new Date()
    const day = date.toLocaleDateString('en-US', { weekday: 'short' })
    const month = date.toLocaleDateString('en-US', { month: 'short' })
    const dayOfMonth = date.getDate()
    const year = date.getFullYear()
    const time = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        timeZoneName: 'long' 
      }
    const timeAndZone = date.toLocaleTimeString('en-GB', time)     

    return `${day} ${month} ${dayOfMonth} ${year} ${timeAndZone}`
}

app.get('/info', (request, response) => {
    response.send('<p>Phonebook has info for ' + persons.length.toString() + ' people </p>' + getDateTime())
 })

const generateId = () => {
  const randomId = Math.random() * (1000000 - 4) + 4;
  return String(Math.round(randomId))
}

// app.post('/api/persons', (request, response) => {
//   const body = request.body

//   if (!body.name || !body.number) {
//     return response.status(400).json({ 
//       error: 'Name and number cannot be empty' 
//     })
//   }


//   const nameExists = persons.some(person => person.name === body.name);
//   if (nameExists) {
//     return response.status(400).json({ 
//       error: 'Name must be unique' 
//     });
//   }

//   const person = {
//     name: body.name,
//     number: body.number,
//     id: generateId(),
//   }

//   persons = persons.concat(person)

//   response.json(person)
// })

app.post('/api/person', (request, response) => {
  const body = request.body

 if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'Name and number cannot be empty' 
    })
  }


  const nameExists = persons.some(person => person.name === body.name);
  if (nameExists) {
    return response.status(400).json({ 
      error: 'Name must be unique' 
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(person)

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})