const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const User = require('./model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'abra30ur329jdfewfew33f33f31sd3ß0,8j'

mongoose.connect('mongodb+srv://tester1:abcdef123@pave-db.x3uiq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())


app.post('/api/login', async (req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({username}).lean()
    if(!user) {
        return res.json({status: 'error', error:'Invalid username/password'})
    }
    if(await bcrypt.compare(password, user.password)) {
        //the username password combinationis succesfull//
        const token = jwt.sign({id: user._id, username: user.username
        }, JWT_SECRET
        )

        return res.json({status: 'ok', data: token})

    }
    res.json({ status: 'error', error: 'invalid username/password'})
})


app.post('/api/register', async (req, res) => {
    const { username, password: plainTextPassword} = req.body

    if(!username || typeof username !== 'string') {
        return res.json({ status : 'error', error: 'Invalid username'})
    }
    if(!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status : 'error', error: 'Invalid password'})
    }
    if(plainTextPassword.length < 5) {
        return res.json({ status : 'error', error: 'Password to small: aT LEAST 5 characters'})
    }
    //bcrypt encrypts passwords//
    const password = await bcrypt.hash(plainTextPassword, 10)

    try {
        const response = await User.create({
            username,
            password
        })
        console.log("User created successfully", response)

    } catch(error) {
        if(error.code === 11000)
            //duplicate key
            return res.json({status: 'error', error: 'Username already in use'})
        }
        //throw error//

    res.json({status: 'ok'})
})

app.listen(9999, () => {
    console.log('Server up at 9999')
})
