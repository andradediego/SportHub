<template>
    <div class="container">
        <h1 class="header">About Us</h1>
        <h2 class="title1">Our Vision</h2>
            <p>We would like to create and organize sporting events for friends and families in the community </p>
        <h2 class="title1">Our Product</h2>
            <ul class="product" style="display:flex">
                <li>The app is specifically designed for sporting events</li>
                <li>Facilitating the process of finding free</li>
                <li>Booking sports fields available</li>
                <li>Setting a date for the events</li>
                <li>Finding partners and letting them join the games without a team</li>
            </ul> 
        <img src="https://cdn.dribbble.com/users/4107928/screenshots/11999532/media/1f6e258bac438f702804c334539cbaae.jpg?compress=1&resize=800x600" alt="">
    </div>

</template>
<script>
export default {
name: 'About',
}
</script>
<style>
.container{
   
    margin: 0 auto;
    text-align: center;
}
h1,h2{
    padding-top:25px;
}
.title1{
    font-size:30px !important;
    margin-bottom: 20px;
}
ul{
    list-style: none;
}
li{ 
    width: 50%;
    padding:10px;
    padding-bottom: 40px;
    border-radius:5px;
    margin-right:20px;
    background-color:#13893f;
    color:aliceblue;
}
li:hover{
    background-color:#186840;
}

</style>
