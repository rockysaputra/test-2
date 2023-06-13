<template>
    <div class="container">
    <h2>Edit User Form</h2>
    <form action="" @submit.prevent="doEdit">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input
          type="text"
          v-model="name"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="your name"
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
          name:""
      }
  },
  methods:{
    ...mapActions(useCounterStore,[
      "editUser"
    ]),
    doEdit(){
    //   console.log("masuk",this.name);
      const {id} = this.$route.params
      this.editUser(id,{name:this.name})
    }
  }
}
</script>

<style>

</style>