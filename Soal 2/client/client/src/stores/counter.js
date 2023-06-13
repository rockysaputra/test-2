import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios  from "axios"

export const useCounterStore = defineStore('counter', {
  state: () => ({
    user:null,
    captcha:null
  }),

  actions: {
    async submitLogin(dataLogin){
      try {
        const {text} = this.captcha
        const {name,password,captchaVerif} = dataLogin
        if(text !== captchaVerif){
          throw new Error("Captcha Not Valid")
        }else{
          const {data} = await axios({
            method:"post",
            url:"http://localhost:3000/login",
            data:{
              name,password
            }
          })
          // if(!data)throw new Error(data.response.data)
          localStorage.setItem("access_token",data.token)
          Swal.fire({
            position: 'top-end',
            toast:true,
            timerProgressNar:true,
            icon: 'success',
            title: 'Success Login',
            showConfirmButton: false,
            timer: 2000
          })
          this.router.push("/")
        }
        // console.log(dataLogin , text);
         
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.message}`
          
        })
        console.log(error);
      }
    },
    async fetchUser(){
      try {
        const {data} = await axios({
          method:"get",
          url:"http://localhost:3000/user",
        })
        this.user = data
      } catch (error) {
        console.log(error);
      }
    },
    async registerUser(dataRegister){
      try {
        const {data} = await axios({
          method:"post",
          url:"http://localhost:3000/register",
          data:dataRegister
        })
        Swal.fire({
          position: 'top-end',
          toast:true,
          timerProgressNar:true,
          icon: 'success',
          title: 'Success Add User',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.push("/")
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUser(userId){
      try {
        await axios({
          method:"delete",
          url:`http://localhost:3000/user/${userId}`
        })
        Swal.fire({
          position: 'top-end',
          toast:true,
          timerProgressNar:true,
          icon: 'success',
          title: 'Success Delete',
          showConfirmButton: false,
          timer: 2000
        })
        this.fetchUser()
      } catch (error) {
        console.log(error);
      }
    },
    async editUser(userId,name){
      try {
        // console.log(userId,dataName);
        const {data} = await axios({
          method:"patch",
          url:`http://localhost:3000/user/${userId}`,
          data:name
        })
        this.fetchUser()
        // console.log(data,">>>>");
        Swal.fire({
          position: 'top-end',
          toast:true,
          timerProgressNar:true,
          icon: 'success',
          title: 'Success Edit User',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.push("/")
      } catch (error) {
        console.log(error);
      }
    },
    async loadCaptcha(){
      try {
        const{data} = await axios({
          method:"get",
          url:"http://localhost:3000/captcha"
        })
        this.captcha = data
      } catch (error) {
        console.log(error);
      }
    }
  },
})
