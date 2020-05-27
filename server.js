const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require("path") //native node module...no need to add later


if(process.env.NODE_ENV != "production") require("dotenv").config() //can access .env keys in dev env
                                                                  //config method will look for any .env file and set the valuse in process env
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)//putting it here bcz it needs acceess to the secret key from the .env file

const app = express()
const port = process.env.PORT || 5000  //set it to PORT when deploy to heroku

app.use(bodyParser.json()) //any incoming req, their body tag will be parsed to json

app.use(bodyParser.urlencoded({extended: true}))  //just specifying thr urls

app.use(cors()) //cross origin req. , enable the multiple ports to make req

if(process.env == "production"){
    app.use(express.static(path.join(__dirname, "client/build")))

    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "client/build", "index.html"))
    })
}

app.listen(port, error => {
    if(error) throw error
    console.log("Server running on port" + port)
    
})

app.post("/payment", (req, res) => {
   const body = {
       source: req.body.token.id,
       amount: req.body.amount,
       currency: "usd"
   }
   stripe.charges.create(body, (stripeErr, stripeRes) => {
       if(stripeErr){
           res.status(500).send({error : stripeErr})

       }
       else {
           res.status(200).send({success : stripeRes})
       }
   })
})