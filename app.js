'use strict'

const express = require("express")
const app = express()
const routes = require("./routes")

const jsonParser = require("body-parser").json
app.use(jsonParser())

app.use("/questions", routes)

var port = process.env.PORT || 3002

app.listen(port, function() {
    console.log("express server listening on port " + port)
})


            // // Middleware: 
            // var jsonCheck = function() {
            //     app.use(function(req, res, next) {
            //         if (req.body) {
            //             console.log("The sky is", req.body.color)
            //         } else {
            //             console.log("no body")
            //         }
            //         next()
            // })}
            // app.use(jsonCheck)
            // app.use(jsonParson())
            // app.use(jsonCheck)



// app.use(function(req, res, next){
//     console.log("first middleware piece")
//     next()
// })
// // access different paths with middleware
// app.use("/different", function(req, res, next){
//     console.log("second middleware piece")
//     next()
// })
// // access user-parameters with middleware
// app.use("/different/:id", function(req, res, next){
//     console.log("second middleware piece id: " + req.params.id)
//     next()
// })

// // pass values through middleware

// app.use(function(req, res, next){
//     req.myMessage = "Hello middleware 2"
//     next()
// })
// app.use(function(req, res, next){
//     console.log(req.myMessage)
//     next()
// })
// // Query parameters
// app.use(function(req, res, next){
//     console.log("The leaves on the trees are ", req.query.color)
//     next()
// })

// 
