const {User} = require("../models")
const bcryptjs = require("bcryptjs")
const jwt = require('jsonwebtoken');

class userController{
    static async register(req,res){
        const {name,password} = req.body
           try {
               const user = await User.create({
                   name,password
               })
               res.status(200).json({
                   name:user.name
               })
           } catch (error) {
            res.status(500).json({
                msg:"Internal Server Error"
            })
               console.log(error);
           }
    }


    static async login(req,res){
        try {
            const{name,password} = req.body
            const findName = await User.findOne({where:{name}})
            if(!findName){
                throw new Error("Invalid email / password")
            }
            else{
                const checkPassword = bcryptjs.compareSync(password,findName.password)
                if(!checkPassword){
                    throw new Error("Invalid email / password")
                }
                else{
                    const token = jwt.sign({name,password},"secret")
                    res.status(200).json({
                        token
                    })
                }
            }
        } catch (Error) {
            res.status(400).json({
                Error:Error.message
            })
            console.log(Error);
        }
    }   

    static async editUser(req,res){
        try {
            const {id} = req.params
            //  asumsi mau edit name saja
            const{name} = req.body
            const findUser = await User.findByPk(id)
            if(!findUser){
                throw new Error("notFound")
            }else{
                
                const edit = await User.update({name},{
                    where:{
                        id
                    }
                })
                res.status(200).json({
                    msg:`Success Update Name to ${name}`
                })
            }

        } catch (Error) {
            if(Error.message == "notFound"){
                res.status(404).json({
                    msg:"User Not found"
                })
            }
            else{
                res.status(500).json({
                    msg:"Internal Server Error"
                })
                console.log(Error);
            }
        }
    }

    static async deleteUer(req,res){
        try {
            const {id} = req.params
            const findUser = await User.findByPk(id)
            if(!findUser){
                throw new Error("notFound")
            }
            else{
                await User.destroy({
                    where:{
                        id
                    }
                })
                res.status(200).json({
                    msg:"User has been deleted"
                })
            }
            
        } catch (Error) {
            if(Error.message == "notFound"){
                res.status(404).json({
                    msg:"User Not found"
                })
            }
            else{
                res.status(500).json({
                    msg:"Internal Server Error"
                })
                console.log(Error);
            }
        }
    }
    static async getUser(req,res){
        try {
            const data = await User.findAll()
            res.status(200).json(data)
        } catch (Error) {
            res.status(500).json({
                msg:"Internal Server Error"
            })
            console.log(Error);
        }
    }
}

module.exports = userController