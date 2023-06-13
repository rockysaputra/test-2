<template>
    <div class="container">
      <h2>Login Form</h2>
      <form action="" @submit.prevent="doLogin">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input
            type="text"
            v-model="dataLogin.name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="your name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Password</label>
          <input
            type="password"
            v-model="dataLogin.password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="password"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Captcha</label>
          <span v-html="captcha.data"></span>
          <input
            type="password"
            v-model="dataLogin.captchaVerif"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="captcha here"
          />
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>

  import {useCounterStore} from "../stores/counter"
  import { mapActions, mapState } from "pinia";

  export default {
    data() {
      return {
        dataLogin: {
          name: "",
          password: "",
          captchaVerif:""
        },
      };
    },
    computed:{
     ...mapState(useCounterStore,[
      "captcha"
     ])
    },
    methods: {
        ...mapActions(useCounterStore,[
            "submitLogin",
            "loadCaptcha"
        ]),
      doLogin() {
        // console.log(this.dataLogin);
        this.submitLogin(this.dataLogin)
      },
    },
    created(){
      this.loadCaptcha()
    }
  };
  </script>
  
  <style></style>
  