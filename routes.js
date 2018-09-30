'use strict'

const express = require("express")
const router = express.Router()


// Get /questions:
    // Route for questions collection
router.get("/", function(req, res) {
    // Return all questions:
    res.json({response: "sent GET request"})
})

// POST /questions
    // Route for creating questions: 
router.post("/", function(req, res) {
    res.json({
        response: "sent POST request",
        body: req.body
    })
})

// Get /questions/:id: 
    // Route for individual questions:
    router.get("/:id", function(req, res) {
        res.json({
            response: "sent GET request for " + req.params.id})
    })


    // Get /questions/5/answers
    // router.get("/5/answers")

module.exports = router
