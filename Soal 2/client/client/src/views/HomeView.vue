<template>
<div>
    <NavbarVue/>
    <div class="container">
    <h2>Daftar User</h2>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Password</th>
      <th scope="col">Ctime</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <TableUserVue v-for="eachUser in user" :key="eachUser.id" :eachUser="eachUser"/>
  </tbody>
</table>
  </div>
</div>
  
</template>

<script>

import TableUserVue from '../components/TableUser.vue'
import NavbarVue from '../components/Navbar.vue'
import {useCounterStore} from "../stores/counter"
import {mapActions,mapState} from "pinia"

export default {
    components:{
        TableUserVue,
        NavbarVue
    },
    computed:{
        ...mapState(useCounterStore,[
            "user"
        ])
    },
    methods: {
        ...mapActions(useCounterStore,[
            "fetchUser"
        ])
    },
    created(){
        this.fetchUser()
    }
}
</script>

<style>

</style>