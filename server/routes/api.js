const express = require('express')
const router = express.Router()

const wonders = [
    { name: "Mount Everest", location: "Nepal", visited: false },
    { name: "Grand Canyon", location: "Arizona", visited: false },
    { name: "Botanical Gardens", location: "Singapore", visited: true },
    { name: "Pantheon", location: "Greece", visited: false },
    { name: "Colosseum", location: "Italy", visited: true }
]

router.get('/wonders', function (req, res) {
    res.send(wonders)
})

router.post('/wonder', function (req, res) {
    console.log("Someone's trying to make a post request")
    wonders.push({ ...req.body, visited: false })
    res.send()
})

router.put('/wonder/:name', function(req, res){
    console.log("update")
    console.log(req.params.name)
    wonders.find(w => w.name === req.params.name).visited = true
    res.send()
})

router.delete('/wonder/:name', function(req, res){
    let i = wonders.indexOf(w => w.name === req.params.name)
    wonders.splice(i,1)
    console.log(wonders)
    res.send()
})

module.exports = router