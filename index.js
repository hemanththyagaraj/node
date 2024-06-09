const express = require("express")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 8000;

app.use(cors({
    origin: "*"
}))

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        important: true,
    },
    {
        id: 2,
        content: "Browser can execute only JavaScript",
        important: false,
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true,
    },
];


app.use(express.static("dist"))

app.get("/api/notes", (req, res) => {
    return res.status(200).json(notes)
})

app.listen(PORT, () => {
    console.log("Listening on port " + PORT)
})
