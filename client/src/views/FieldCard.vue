<template class="field">
         <v-card                
                    dark            
                    color="#13893f"
                    class="mx-auto pa-3"                    
                    width="500">
                   <v-img
                    :src="field.src"
                    height="200px"
                ></v-img>
                    <v-card-title>
                        <div >{{field.name}}</div>
                    </v-card-title>
                    <v-card-text>
                        <div >{{field.location}}</div>
                    </v-card-text>
                   <v-card-subtitle>
                       <div >{{field.description}}</div>
                    </v-card-subtitle>
                     <v-btn>Booking</v-btn>
        </v-card>
</template>
<script>

export default {
    name: 'field',
    props:['field'],
    computed:{
        description(){
            return this.field.description.substring(0,150)
        }
    }
}
</script>
<style>

</style>