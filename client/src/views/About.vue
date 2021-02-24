<template>
<v-app>
    <v-container>
        <div class="text">
        <h1 >About Us</h1>
        <h2 class="title1">Our Vision</h2>
        <div>We would like to create and organize sporting events for friends and families in the community </div>
        <h2 class="title1" >Our Product</h2>
        </div>
    <div class="product" >
     <ul>
         <li> 
        <v-card
        class="mx-auto"
        max-width="344">
        <v-card-text>
            <div>The app is specifically designed for sporting events</div>
        </v-card-text>
        </v-card>
         </li>
         <li> <v-card
        class="mx-auto"
        max-width="344">
        <v-card-text>
            <div>Facilitating the process of finding free </div>
        </v-card-text>
        </v-card></li>
         <li> <v-card
        class="mx-auto"
        max-width="344">
        <v-card-text>
            <div>Booking sports fields available</div>
        </v-card-text>
        </v-card></li>
         <li> <v-card
        class="mx-auto"
        max-width="344">
        <v-card-text>
            <div>Setting a date for the events </div>
        </v-card-text>
        </v-card></li>
         <li> <v-card
        class="mx-auto"
        max-width="344">
        <v-card-text>
            <div>Finding partners and letting them join the games without a teams</div>
        </v-card-text>
        </v-card></li>
     </ul>    
</div>
  <v-img 
         max-width="100%"
  src="https://cdn.dribbble.com/users/4107928/screenshots/11999532/media/1f6e258bac438f702804c334539cbaae.jpg?compress=1&resize=800x600"
  ></v-img>

    </v-container>
</v-app>
    

</template>
<script>
export default {
name: 'About',
}
</script>
<style>
.text{
text-align: center;
padding-top: 5%;
}
h1{
font-size: 36px;
font-weight: 500;}
.title1{
    font-size:30px !important;
    margin-top: 20px;
    font-weight: 400;
}
ul{
    list-style: none;
    display: flex;
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
.product{
    display: flex;
    justify-content: space-between;
}

</style>
