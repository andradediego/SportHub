<template>
  <v-data-table
    :headers="headers"
    :items="efieldGetter"
    sort-by="Name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Admin Panel</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="green"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Field
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                  <v-text-field
                    v-model="editedItem.Name"
                    label="Field Name"
                  ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                  <v-text-field
                    v-model="editedItem.Location"
                    label="Location"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  > 
                  <v-text-field
                    v-model="editedItem.Description"
                    label="Description"
                  ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                  <v-text-field
                    v-model="editedItem.src"
                    label="Source"
                  ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                  <v-text-field
                    v-model="editedItem.Inactive"
                    label="Status"
                  ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
 <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
  export default {
    data: () => ({
      dialog: false,
       headers: [
        { text: 'Name', value: 'Name' },
        { text: 'Location', value: 'Location' },
        { text: 'Description', value: 'Description' },
        { text: 'Source', value: 'src' },
        { text: 'Status', value: 'Inactive' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      eFields: [],
      editedIndex: -1,
      editedItem: {
        Name: '',
        Lcation: '',
        Description: '',
        src: '',
        Inactive: '',
      },
      defaultItem: {
        Name: '',
        Lcation: '',
        Description: '',
        src: '',
        Inactive: '',
      },
    }),

    computed: {
       ...mapGetters(['efieldGetter']),
      formTitle () {
        return this.editedIndex === -1 ? 'Field Information' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },
    mounted() {
        this.loadEFields();
    }, 
    methods: {
      ...mapActions(['loadEFields', "updateOrSavingFields"]),
      initialize () {
      },
      editItem (item) {
        this.editedIndex = this.eFields.indexOf(item)
        this.editedItem = Object.assign({}, item)
        console.log(item);
        this.dialog = true
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },


      save () {                
        const upload = {
          name: this.editedItem.Name,
          location: this.editedItem.Location,
          description: this.editedItem.Description,
          src: this.editedItem.src,
          inactive: this.editedItem.Inactive == 0 ? false : true,
          id: this.editedItem.FieldId ? this.editedItem.FieldId : 0
        };
        
        
        this.updateOrSavingFields(upload);

        if (this.editedIndex > -1) {
          Object.assign(this.efieldGetter[this.editedIndex], this.editedItem)
        } else {
          this.efieldGetter.push(this.editedItem)
        }
        this.close()

      },
    },
  }
</script>