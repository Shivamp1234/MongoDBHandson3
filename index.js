const express = require('express');

const app = express();

const route = require("./routes/route")
const connect = require("./config/db")

app.use(express.json())

app.use(route)

app.get("/", (req, res) => {
    console.log("Api is running fine!")
})

app.listen(6000, async () => {
    try {
        await connect()
        console.log("Server is running at port 6000")
    }
    catch (err) {
        console.log(`Error in the server ${err}`)
    }
})