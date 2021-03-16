<template>
    <div class="product" >
        <v-row>
            <template v-for="field in fieldGetter">
                <v-col :key="field.id"
                    cols="12"                    
                    sm="12"
                    md="4"
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
import FieldCard from '../components/producs/FieldCard.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Product',    
    components: {
        FieldCard
    },    
    methods: {
        ...mapActions(['loadFields']),
    },
    mounted() {
        this.loadFields();
    }, 
    props:['field'],
    computed: {
        ...mapGetters(['fieldGetter'])
    }
}
</script>
<style scoped>

</style>