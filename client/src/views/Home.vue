<template>
<body>
  <div class="content">Book a sports facility near you</div>
  <div class="search-bar">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search for a facility" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
  <div class="img1">
    <img src="https://cdn.dribbble.com/users/124813/screenshots/5331224/593-football-players-floydworx_4x.png?compress=1&resize=800x600" alt="">
  </div>
</body>
</template>

<script>
export default {
  name: 'Home',
  components: {    
  }
}
</script>
<style>
.content{
  font-size:36px;
  text-align: center;
  padding-top: 2%;
  font-weight: 500;
}
.search-bar{
  padding-top:20px;
  margin-left:32.5%;
  width: 35%;
}
.img1{
  text-align: center;
  align-content: center;
  max-width: 100%;
}
</style>
<script>
export default {
  name: 'Home',
}
</script>
