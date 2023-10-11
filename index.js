const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users = [
      { id: 1, name: 'Kashem', phone: '123456' },
      { id: 1, name: 'Hashem', phone: '123456' },
      { id: 1, name: 'Baten', phone: '123456' },
]

app.get('/', (req, res) => {
      res.send('User management server is running')
})

app.get('/users', (req, res) => {
      res.send(users)
})

app.post('/users', (req, res) => {
      console.log(req.body);
      const newUser = req.body;
      newUser.id = users.length + 1;

      res.send(newUser);
})

app.listen(port, () => {
      console.log(`This server is running under the ${port} port`);
})