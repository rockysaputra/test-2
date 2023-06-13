const express = require('express')
const app = express()
const port = 3000
const svgCaptcha = require("svg-captcha")
const cors = require('cors');
const userController = require('./Controllers/userController')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())

app.get('/captcha',(req, res) =>{
	let captcha = svgCaptcha.create()

  let text = captcha.text
  let data = captcha.data

	res.status(200).send({
    data,
    text
  });
});

app.post('/register',userController.register )

app.post("/login", userController.login )

app.patch("/user/:id",userController.editUser)

app.delete("/user/:id",userController.deleteUer)

app.get("/user",userController.getUser)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})