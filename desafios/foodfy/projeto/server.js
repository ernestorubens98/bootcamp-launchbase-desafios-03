const express = require('express')
const nunjucks = require('nunjucks')

const receitas = require('./database/data')
const { on } = require('nodemon')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'njk')

nunjucks.configure('views', {
    express:app,
    autoescape: false,
    noCache: true
})

app.get('/', (req, res) => {
    res.render('index', { receitas })
})

app.get('/receitas', (req, res) => {
    res.render('receitas', { receitas })
})

app.get('/sobre', (req, res) => {
    res.render('sobre')
})

app.get("/receitas/:index", function (req, res) {
    const { index } = req.params;
  
    res.render('receita-unica', {receita: receitas[index] })
  })

app.listen(3000, () => {
    console.log('Server running on port 3000')
})