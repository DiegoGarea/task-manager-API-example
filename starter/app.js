require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/task');

//middleware

app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
