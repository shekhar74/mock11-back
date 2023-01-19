const express = require("express");
const UserSignUp = require("../Schema/UserSchema");
const app = express();
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")
const router = express.Router();
app.use(express.json());

router.get("",async(req,res)=>{
  res.send("hello world")
})

router.post("/signup", async (req, res) => {
    try {
      let data = req.body;
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password,salt);
      const user = await UserSignUp.create(data);
      res.send(user);
    } catch (error) {
      res.status(401).send(error.message);
    }
  });
  


  router.post("/login", async (req, res) => {
    let { email, password } = req.body;
    // console.log(req.body)
    try {
      const user = await UserSignUp.findOne({ email });
      const verification = await bcrypt.compare(password, user.password);
    //   console.log(verification)
      if (user && verification) {
        const token=jwt.sign({name:user.name},"SECRET1234")
        return res.send({message:"Login Success",token})
      } else {
        res.send("Invalid credentials");
      }
    } catch (error) {
      res.send("User Not Found");
    }
  });
module.exports=router
  