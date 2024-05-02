const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const mongoUrl = "mongodb+srv://hruthwik6:6660Abc@cluster0.2ze7ka0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl).then(() => {
    console.log("Database connected");
}).catch((error) => {
    console.log(error);
});

require('./userDetails')

const User = mongoose.model("UserInfo");

app.get("/", (req, res) => {
    res.send({ status: "started" })
})

app.post('/register', async (req, res) => {
    const { name, email, mobile, password } = req.body;

    const oldUser = await User.findOne({ email: email });
    const oldestUser = await User.findOne({ mobile: mobile });

    if (oldUser || oldestUser) {
        return res.send({ data: "User Already Exists" });
    }

    try {
        await User.create({
            name,
            email,
            mobile,
            password
        });
        res.send({ status: "ok", data: "User Created" });
    } catch (error) {
        res.send({ status: "error", data: error.message });
    }
});

app.listen(5001, () => {
    console.log("Server has started");
});
