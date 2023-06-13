<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" aria-current="page" href="#">Add User</a> -->
          <router-link to="/add-user" class="nav-link" aria-current="page" href="#">Add User</router-link>
        </li>
        <li class="nav-item" @click="doLogout">
          <a class="nav-link" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    methods:{
        doLogout(){
            localStorage.removeItem("access_token")
            Swal.fire({
            position: 'top-end',
            toast:true,
            timerProgressNar:true,
            icon: 'success',
            title: 'Success Logout',
            showConfirmButton: false,
            timer: 2000
          })
            this.$router.push("/login")
        }
    }
}
</script>

<style>

</style>