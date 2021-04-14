 <template>
 <div>
  <!-- <v-col
    cols="12"
    xs="12"
    sm="8"
    md="6"
    offset-sm="2"
    offset-md="3"
    >
     <v-date-picker        
        color="#13893f"
        full-width 
        v-model="picker"      
      ></v-date-picker>
   </v-col>
   {{fieldGetter}}
   <v-row>
      Available Fields:
   </v-row>
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
   </div>    -->
   {{getCalendar}}
   </div> 
</template>

<script>
// import FieldCard from '../components/producs/FieldCard.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Product',    
    components: {
       
    },    
    methods: {
        ...mapActions(['loadCalendar']),
    },
    mounted() {
        this.loadCalendar();
    }, 
    props:['field'],
    computed: {
        ...mapGetters(['getCalendar'])
    }
}
</script>