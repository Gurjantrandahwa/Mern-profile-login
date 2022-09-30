import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


mongoose.connect("mongodb://localhost:27017/profile", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Db connected")
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)


app.post('/login', (req, res) => {
    const {email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({message: "Login Successfully", user: user})
            } else {
    res.send({message:"Invalid Password"})
            }
        } else {
            res.send({message: "User Not Registered"})
        }
    })
})

app.post('/register', (req, res) => {
    const {name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if (user) {
            res.send({message: "User Already Registered Please Login now."})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({message: "Successfully registered"})
                }
            })
        }
    })

})


app.listen(3001, () => {
    console.log('server started on 3001')
})