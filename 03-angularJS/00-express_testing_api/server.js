const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(express.json(), express.urlencoded({extended: true}));
app.use(cors())

// ----- | A simple server for the express purpose of testing the angularJS API calls. | -----

// ----- | Simple data for testing requests.
let tasks = [
    {title: "First Task", content: "Content for the first task..."},
    {title: "Second Task", content: "Content for the second task..."},
    {title: "Third Task", content: "Content for the third task..."},
    {title: "Fourth Task", content: "Content for the fourth task..."},
]

app.get("/api", (req, res) => {
    res.json({message: "Connected to Express Testing API."});
});

// ----- | Get Task(s)
app.get("/api/tasks", (req, res) => { res.json(tasks); });
app.get("/api/tasks/:id", (req, res) => {
    if (req.params.id < tasks.length) { res.json(tasks[req.params.id]); }
    else { res.json({message: "ID entered does not exist."}).status(504); }
});

//  ----- | Create Task
app.post("/api/tasks", (req, res) => { tasks.push(req.body) })

app.listen( port, () => console.log(`Listening on port: ${port}`) );