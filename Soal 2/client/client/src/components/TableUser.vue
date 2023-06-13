<template>
    <tr>
      <th scope="row">{{ eachUser.id }}</th>
      <td>{{ eachUser.name }}</td>
      <td>{{ eachUser.password }}</td>
      <td>{{ formatDate(eachUser.createdAt) }}</td>
      <td>
          <button class="btn btn-warning mx-3" @click='toEdit'>Edit</button>
          <button class="btn btn-danger" @click="deletelist">Delete</button>
      </td>
    </tr>
  </template>
  
  <script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

  export default {
      props: ["eachUser"],
      methods: {
        ...mapActions(useCounterStore,[
            "deleteUser"
        ]),
          formatDate(date) {
              const d = new Date(date);
              return d.toLocaleDateString("en-GB");
          },
          deletelist(){
            this.deleteUser(this.eachUser.id)
          },
          toEdit(){
            this.$router.push(`/edit-user/${this.eachUser.id}`)
          }
      }
  };
  </script>
  
  <style></style>
  