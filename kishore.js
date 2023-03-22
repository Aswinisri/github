// Import Express
import express from "express"

// Initialisation
const app = express()

// Middleware
app.use(express.json())


// Route
// app.get(ROUTE, CB())

app.post("/name", (req, res) => {
console.log("REQ", req.body)
res.json(
    {
        "msg":"Successfully Created!"
    }
)
})
//input
// REQ.QUERY
// REQ.PARAMS
// REQ.BODY


// Port - 5000
const port = 5000
app.listen(port, () => {
 console.log(`Server running at port ${port}`)
})


// FE
// HTTP METHOD (GET, POST, PUT, DELETE)
// ROUTE (API)
// DATA --> JSON (POST: email, password) (PUT: id, name) (DELETE: id)
// HEADERS



//output
res.send()
res.SendFile()
res.json()
res.statuscode()