<template>
   <v-row>
       <v-col
        cols="12"
        xs="12"
        sm="8"
        md="6"
        offset-sm="2"
        offset-md="3"
       >
        <div class="text-h3 text-center">About Us</div>
        <br>
        <div class="text-h4 text-center">Our Vision</div>
        <br>
        <p class="text-center">We would like to create and organize sporting events for friends and families in the community</p>
        <br>
        <div class="text-h4 text-center">Our Product</div>
        <br>
        <v-row>            
            <template v-for="product in products" > 
                <v-col
                    cols="12"
                    xs="12"
                    sm="6"                    
                    :key="product"
                    >           
                <v-card                
                    dark            
                    color="#13893f"
                    class="mx-auto pa-2"                    
                    width="500">
                    <v-card-text>
                        <div >{{product}}</div>
                    </v-card-text>
                </v-card>
                </v-col>
            </template>
        </v-row>
        <v-img 
            max-width="100%"
            src="https://cdn.dribbble.com/users/4107928/screenshots/11999532/media/1f6e258bac438f702804c334539cbaae.jpg?compress=1&resize=800x600">
        </v-img>
       </v-col>
   </v-row>
</template>

<script>
export default {
name: 'About',
data: () => ({
    products: [
        'The app is specifically designed for sporting events',
        'Facilitating the process of finding free sports fields',
        'Booking sports fields available',
        'Setting a date for the events',
        'Finding partners and letting them join the games without a teams'
    ]
})
}
</script>
<style>
/* .text{
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
} */

</style>
