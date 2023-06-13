<template>
      <div class="container">
      <h2>Add User Form</h2>
      <form action="" @submit.prevent="doRegister">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input
            type="text"
            v-model="dataRegister.name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="your name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Password</label>
          <input
            type="password"
            v-model="dataRegister.password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="password"
          />
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
</template>

<script>
import { useCounterStore } from '../stores/counter';
import { mapActions } from 'pinia';


export default {
    data(){
        return{
            dataRegister:{
                name:"",
                password:""
            }
        }
    },
    methods:{
      ...mapActions(useCounterStore,[
        "registerUser"
      ]),
      doRegister(){
        // console.log("masuk",this.dataRegister);
        this.registerUser(this.dataRegister)
      }
    }
}
</script>

<style>

</style>