<template>
  <div>
    <div>
      <v-card
  elevation="6"
  class="mx-auto"
  max-width="600"

>
<v-card-title>
  Race/Ethnicity
</v-card-title>
<v-row>
          <v-col class = "ml-6 mt-n4 md2"
          :cols="11">
            <v-checkbox
              v-model="checkbox"
              :label="`White`"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox2"
              :label="`Hispanic or Latino`"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox3"
              :label="`Black or African American`"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox4"
              :label="`Native American or American Indian`"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox5"
              :label="`Asian/Pacific Islander`"
              hide-details
            ></v-checkbox>
            <v-row align="center">
        <v-checkbox 
        class="pa-3 shrink mr-2 mt-0"
          v-model="checkbox6"
          label="Other:"
          hide-details
          
        ></v-checkbox>
        <v-text-field
        v-model="text">
          
        </v-text-field>
      </v-row>
          </v-col>
      </v-row>
</v-card>
    </div>
    <div>
      <h2>Display</h2>
      <div>
        <v-checkbox
              :label="`Data: White: ${checkbox.toString()}, Hispanic: ${checkbox2.toString()}, 
              Black: ${checkbox3.toString()}, Native American: ${checkbox4.toString()}, 
              Asian: ${checkbox5.toString()}, Other: ${text}`"
              hide-details
            ></v-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
//import Home1 from '@/components/Home1.vue'

export default {
  name: 'About',
  data() {
    return {
      checkbox: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      text: "",
    }
  }
  
  /*components: {
    // eslint-disable-next-line vue/no-unused-components
    Home1,
  },*/
}
</script>

<style scoped>
  .column {
    float: left;
    width: 50%;
  }
  .row::after {
    content: "";
    display: "table";
    clear: both;
  }
  input.larger {
    transform: scale(1.5);
    margin: 30x;
  }
  .margin {
    margin-left: 30px;
  }
  .text {
    padding-left: 10px;
  }
  .test {
    float: right;
  }

</style>
