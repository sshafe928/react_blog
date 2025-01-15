// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Read comments from JSON file
const getComments = () => {
const filePath = path.join(__dirname, 'comments.json');
if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}
return [];
};

// Save comments to JSON file
const saveComments = (comments) => {
const filePath = path.join(__dirname, 'comments.json');
fs.writeFileSync(filePath, JSON.stringify(comments, null, 2));
};

// API endpoint to get comments
app.get('/api/comments', (req, res) => {
const comments = getComments();
res.json(comments);
});

// API endpoint to post a comment
app.post('/api/comments', (req, res) => {
const newComment = req.body;
const comments = getComments();
comments.push(newComment);

saveComments(comments);

res.status(200).send('Comment saved');
});

app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});