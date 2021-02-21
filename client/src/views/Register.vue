<template>
  <div class="submitForm">
    <form>
     <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Your full name</label>
        <input type="text" class="form-control" required>
    </div>    
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control"   required>
    </div>
   
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" required>
    </div>
    
    <button type="submit" class="btn btn-color">Submit</button>
    </form>
  </div>
</template>

<script>
//import { mapActions } from "vuex";
export default {
  name: 'Register',
  components: {},
  /*data() {
    return {
      form: {
        username: "",
        full_name: "",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        await this.Register(this.form);
        this.$router.push("/posts");
        this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
     
  },*/
};
</script>

<style>
.submitForm{
margin:0 auto;
width: 30%;
justify-content: flex-start;
align-items: center;
justify-content: center;
color: black;
border: solid 1px gainsboro;
border-radius: 10px;
padding:20px;
}
.btn-color{
    background:#13893f;
    color:white;
}
</style>

