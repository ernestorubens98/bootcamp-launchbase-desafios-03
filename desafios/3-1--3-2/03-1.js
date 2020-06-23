const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
const allCourses = require('./database/courses')
const about = require('./database/about')


app.use(express.static('public'))


app.set('view engine', 'njk')

nunjucks.configure('views', {
    express:app,
    autoescape: false
})


app.get('/', (req, res) => {
    res.render('courses', { cursos: allCourses })
})

app.get('/about', (req, res) => {
    res.render('about', { about })
})

app.get("/courses/:id", (req, res) => {
    const { id } = req.params

    const curso = allCourses.find( curso => {
        return curso.id == id;
    })

    if (!curso) {
        return res.send('Curso não encontrado')
    }
  
    res.render('description', { curso })
  });

app.use((req, res) => {
    res.status(404).render("not-found");
  });

app.listen(3000, () => {
    console.log('Server running on port 3000')
})