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
];
let widgets = [
    {name: "Flux Capacitor"},
    {name: "Lightsaber"},
    {name: "Arc Reactor"},
];

app.get("/api", (req, res) => {
    res.json({message: "Connected to Express Testing API."});
});

// ----- | Task(s) Routes
app.get("/api/tasks", (req, res) => { res.json(tasks); });
app.get("/api/tasks/:id", (req, res) => {
    if (req.params.id < tasks.length) { res.json(tasks[req.params.id]); }
    else { res.json({message: "ID entered does not exist."}).status(504); }
});
app.post("/api/tasks", (req, res) => { tasks.push(req.body) })

// ----- | Widgets Routes
app.get("/api/widgets", (req, res) => { res.json(widgets); });
app.get("/api/widgets/:id", (req, res) => {
    if (req.params.id < widgets.length) { res.json( widgets[req.params.id]); }
    else { res.json({message: "ID entered does not exist."}).status(504); }
});
app.post("/api/widgets", (req, res) => { widgets.push(req.body) })
app.delete("/api/widgets/:id", (req, res) => {
    if (req.params.id < widgets.length) {
        widgets.splice(parseInt(req.params.id), 1);
        res.json({confirmation: "Widget Successfully Deleted."})
    }
    else { res.json({message: "ID entered does not exist."}).status(504); }
})
app.put("/api/widgets/:id", (req, res) => {
    console.log(req.body)
    if (req.params.id < widgets.length) {
        widgets[req.params.id] = req.body;
        res.json({confirmation: "Widget Successfully Updated."})
    }
    else { res.json({message: "ID entered does not exist."}).status(504); }
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );