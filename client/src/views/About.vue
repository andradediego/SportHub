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
            <template v-for="about in abouts" > 
                <v-col
                    cols="12"
                    xs="12"
                    sm="6"                    
                    :key="about"
                    >           
                <v-card                
                    dark            
                    color="#13893f"
                    class="mx-auto pa-2"                    
                    width="500">
                    <v-card-text>
                        <div >{{about}}</div>
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
    abouts: [
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

</style>
