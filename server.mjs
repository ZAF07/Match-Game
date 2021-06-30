import express from 'express';
import {resolve} from 'path';


const app = express()

app.use(express.static('public'))
app.use(express.static('public/dist'))

app.get('/', (req, res) => {
  res.sendFile(resolve('public', 'dist', 'index.html'))
})

app.listen(3000, console.log('http://localhost:3000'));

test