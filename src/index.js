const path = require('path');
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

// HTTP logger
app.use(morgan('combined'))

//static 
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.engine('hbs', engine({
  extname: ".hbs"
}))
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname, 'resources/views'));
console.log(__dirname);

app.get('/', (req, res) => {
	res.render('home')
})

app.get('/news', (req, res) => {
	res.render('news')
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
