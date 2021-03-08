<template>
   <div class="product">
       <FieldCard class="fieldCard" 
       v-for="field in fields"
       :key="field.id"
       :field="field"
       />
   </div>
</template>
<script>
import fields from '../data/fields.js'
import FieldCard from './FieldCard.vue'

export default {
name: 'Product',
components: {
FieldCard
},
data: () => ({
    fields : fields
})
}
</script>
<style scoped>
.fieldCard{
    margin-bottom: 20px;
    
}
</style>