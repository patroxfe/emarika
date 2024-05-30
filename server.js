import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Replace with your Hostinger database credentials
const db = mysql.createConnection({
  host: 'your_host',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

app.post('/submit', (req, res) => {
  const { firstName, email, phone, description, socialMedia, content, logo, language, competitors, notes } = req.body;

  const query = `
    INSERT INTO submissions (firstName, email, phone, description, socialMedia, content, logo, language, competitors, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [firstName, email, phone, description, socialMedia, content, logo, language, competitors, notes], (err, result) => {
    if (err) {
      console.error('Error inserting data: ' + err.stack);
      res.status(500).send('Server error');
      return;
    }
    res.status(200).send('Data submitted successfully');
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
