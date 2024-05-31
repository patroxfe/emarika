const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

// Konfiguracja CORS
const corsOptions = {
	origin: 'https://emarika.pl',
	methods: ['GET', 'POST', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Authorization'],
	optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

// Połączenie z bazą danych
const db = mysql.createConnection({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
})

db.connect(err => {
	if (err) {
		console.error('Database connection failed: ' + err.stack)
		return
	}
	console.log('Connected to database.')
})

app.options('*', cors(corsOptions)) // Preflight OPTIONS request

app.post('/submit', (req, res) => {
	const { firstName, email, phone, description, socialMedia, content, logo, language, competitors, notes } = req.body

	const query = `
    INSERT INTO submissions (firstName, email, phone, description, socialMedia, content, logo, language, competitors, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `

	db.query(
		query,
		[firstName, email, phone, description, socialMedia, content, logo, language, competitors, notes],
		(err, result) => {
			if (err) {
				console.error('Error inserting data: ' + err.stack)
				res.status(500).send('Server error')
				return
			}
			res.status(200).send('Data submitted successfully')
		}
	)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
