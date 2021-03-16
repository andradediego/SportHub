<template>
    <div class="product" >
        <v-row>
            <template v-for="field in fields">
                <v-col :key="field.id"
                >
                <FieldCard class="fieldCard" 
                :field="field"
                />
                </v-col>
            </template>
        </v-row>  
   </div>
</template>
<script>
//import fields from '../../data/fields.js'
import FieldCard from './FieldCard.vue'
import {mapState} from 'vuex'
export default {
    name: 'Product',
    components: {
    FieldCard
    },
    mounted(){
        this.$store.dispatch('loadFields')
    }, 
    props:['field'],
    computed: mapState(['fields'])
}
/*
export default {
name: 'Product',
components: {
FieldCard
},
data: () => ({
    fields : fields
})
}*/
</script>
<style scoped>

</style>