<template>
  <div>
    <div v-if="show === 1">
      <v-card elevation="6" class="mx-auto" max-width="600">
        <p class="text-h6 font-weight-bold pa-4">Race/Ethnicity (Required)</p>
        <v-row>
          <v-col class="ml-6 mt-n4 md2" :cols="11">
            <v-checkbox
              v-for="(race, i) in races"
              :key="i"
              v-model="Race"
              :label="`${race}`"
              :value="`${race}`"
              hide-details
            ></v-checkbox>
            <v-row align="center">
              <v-checkbox
                class="pa-3 shrink mr-2 mt-0"
                v-model="Race"
                label="Other:"
                :value="textInput"
                hide-details
              ></v-checkbox>
              <v-text-field label="" v-model="raceText"> </v-text-field>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <div id="top-margin" v-if="show === 2">
      <v-card elevation="6" class="mx-auto" max-width="600">
        <p class="text-h6 font-weight-bold pa-4">Sex</p>
        <v-radio-group v-model="radioGroup">
          <v-col class="ml-3 mt-n8 md2" :cols="11">
            <v-radio
              class="mb-6"
              v-for="(gen, i) in sex"
              :key="i"
              :label="`${gen}`"
              :value="gen"
            ></v-radio>
            <v-row align="center">
              <v-radio
                class="pa-3 shrink mr-n3 mt-2"
                :value="textInput2"
                hide-details
              ></v-radio>
              <v-text-field v-model="sexText" label="Other..."> </v-text-field>
            </v-row>
          </v-col>
        </v-radio-group>
      </v-card>
    </div>
    <div id="top-margin" v-if="show === 3">
      <v-card elevation="6" class="mx-auto" max-width="600">
        <p class="text-h6 font-weight-bold pa-4 mb-n4">Age</p>
        <v-radio-group v-model="radioGroup2">
          <v-col class="ml-3 mt-n8 md2" :cols="11">
            <v-radio
              class="mt-6"
              v-for="(age, i) in ages"
              :key="i"
              :label="`${age}`"
              :value="age"
              hide-details
            ></v-radio>
          </v-col>
        </v-radio-group>
      </v-card>
    </div>
    <div id="top-margin" v-if="show === 4">
      <v-card elevation="6" class="mx-auto text-justify" max-width="600">
        <p class="text-h6 font-weight-bold pa-4">
          Have you suffered from/do you have any diseases or medical ailments
          (especially those that impact your nervous system or sense of smell)?
          (ex: Alzheimer's or Parkinson's disease, diabetes, cancer, depression,
          etc.)
        </p>
        <v-radio-group v-model="radioGroup3">
          <v-col class="ml-3 mt-n8 md2" :cols="11">
            <v-radio
              value="Yes"
              :label="`Yes (please read the next question)`"
              hide-details
            ></v-radio>
            <v-radio
              class="mt-4"
              value="No"
              :label="`No (please skip the next question)`"
              hide-details
            ></v-radio>
          </v-col>
        </v-radio-group>
      </v-card>
    </div>
    <div id="top-margin" v-if="show === 5">
      <v-card elevation="6" class="mx-auto" max-width="600">
        <p class="text-h6 font-weight-bold pa-4">
          If you answered "yes" for the previous question and if you are
          comfortable to do so, please record specifically what your ailment
          was.
        </p>
        <v-col class="ml-3 mt-n8 md2" :cols="11">
          <v-text-field v-model="text2" label="Short answer text">
          </v-text-field>
        </v-col>
      </v-card>
    </div>
    <div id="top-margin" v-if="show === 6">
      <v-card elevation="6" class="mx-auto" max-width="600">
        <p class="text-h6 font-weight-bold pa-4">
          Which broad cultural group(s) do you identify with? (Examples: Middle
          Eastern, South Asian, Eastern European, American)
        </p>
        <v-col class="ml-3 mt-n8 md2" :cols="11">
          <v-text-field v-model="text3" label="Short answer text">
          </v-text-field>
        </v-col>
      </v-card>
    </div>
    <div id="top-margin" v-if="show === 7">
      <v-card elevation="6" class="mx-auto" max-width="600">
        <p class="text-h6 font-weight-bold pa-4">
          If you are from the U.S., which region are you from? (ex. the Midwest,
          the South, etc)
        </p>
        <v-col class="ml-3 mt-n8 md2" :cols="11">
          <v-text-field v-model="text4" label="Short answer text">
          </v-text-field>
        </v-col>
      </v-card>
    </div>
    <v-card id="top-margin" v-if="show === 8">
      <v-row>
        <v-col cols="3">
          <div id="sp2-align">
            <v-card
              elevation="6"
              v-for="(item, i) in items"
              :key="i"
              class="mx-auto"
              max-width="300"
            >
              <p id="s-align" class="text-body-1 font-weight-medium pa-4">
                {{ item }}
              </p>
            </v-card>
          </div>
        </v-col>
        <v-col cols="9">
          <div>
            <v-card elevation="6" class="mx-auto">
              <p class="text-h6 font-weight-bold pa-4">
                On a scale of 1-7, how strongly do you like the item shown on
                the left.
              </p>
            </v-card>
          </div>
          <div>
            <v-card
              elevation="6"
              class="mx-auto mt-8"
              v-for="(strong, p) in strongly"
              :key="p"
            >
              <v-row>
                <v-radio-group :v-model="strong" row>
                  <v-col
                    class="ml-4"
                    cols="1.5"
                    v-for="(rating, i) in ratings"
                    :key="i"
                  >
                    <v-radio :key="p" :label="`${rating}`" :value="`${rating}`">
                    </v-radio>
                  </v-col>
                </v-radio-group>
              </v-row>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <div>
      <v-card id="top-margin" v-if="show === 9">
        <v-row>
          <v-col cols="3">
            <div id="sp-align">
              <v-card
                elevation="6"
                v-for="(item, i) in items"
                :key="i"
                class="mx-auto"
                max-width="300"
              >
                <p id="align" class="text-body-1 font-weight-medium pa-4">
                  {{ item }}
                </p>
              </v-card>
            </div>
          </v-col>
          <v-col cols="9">
            <div>
              <v-card elevation="6" class="mx-auto">
                <p class="text-body-1 font-weight-medium pa-4">
                  On a scale of 1-7, how intensely can you recall the item
                  listed on the left. (1 is "not at all", 7 is "extremely
                  vivid")
                </p>
              </v-card>
            </div>
            <div>
              <v-card
                elevation="6"
                class="mx-auto mt-8"
                v-for="p in 25"
                :key="p"
              >
                <v-row>
                  <v-radio-group :v-model="`intense_${p}`" row>
                    <v-col class="ml-4" cols="1.5" v-for="p in 7" :key="p">
                      <v-radio
                        class="mr-8"
                        :v-model="`${radp}`"
                        :key="p"
                        :label="`${p}`"
                        :value="`${p}`"
                      >
                      </v-radio>
                    </v-col>
                  </v-radio-group>
                </v-row>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <div v-if="show === 10">
      <v-card elevation="6" class="mx-auto mt-8" max-width="600">
        <v-card-title>
          You have completed the survey, you may now exit the page
        </v-card-title>
      </v-card>
    </div>
    <div class="mt-8">
      <v-alert type="error" v-if="error === true">
        Please input a response
      </v-alert>
    </div>

    <v-row class="mb-8" id="top-margin" justify="space-around">
      <v-btn
        v-if="show <= 8"
        right
        class="text-right"
        @click="
          checker();
          show = func();
        "
        >Next
      </v-btn>
      <v-btn
        v-if="show === 9"
        right
        class="text-right"
        @click="
          checker();
          show = func();
        "
        >Submit
      </v-btn>
    </v-row>
    <div></div>
  </div>
</template>

<script>
//import RadioButton from "@/components/RadioButton.vue";
// add checker function back to NEXT button
export default {
  components: {},
  name: "Teyon",
  data: () => ({
    items: [
      "Ketchup",
      "Limes",
      "Cinnamon",
      "Turmeric",
      "Chocolate",
      "Coffee",
      "Chili Peppers",
      "Soy Sauce",
      "Kimchi",
      "Vinegar",
      "Mayonnaise",
      "Cardamon",
      "Pork",
      "Mint",
      "Cilantro",
      "Fermented Fish",
      "Sauerkraut",
      "Ginger",
      "Garlic",
      "Rosemary",
      "Saffron",
      "Noodles",
      "Dumplings",
      "Oregano",
      "Parsley",
    ],
    ratings: [
      "Strongly dislike",
      "Somewhat dislike",
      "Slightly dislike",
      "Neutral",
      "Slighty like",
      "Somewhat like",
      "Strongly like",
    ],
    races: [
      "White",
      "Hispanic or Latino",
      "Black or African American",
      "Native American or American Indian",
      "Asian/Pacific Islander",
    ],
    sex: ["Male", "Female", "Prefer not to say"],
    ages: [
      "Under 10 years old",
      "10-15 years old",
      "15-20 years old",
      "20-40 years old",
      "Over 60 years",
    ],
    Race: [],
    radioGroup: null,
    radioGroup2: null,
    radioGroup3: null,
    radioGroup4: null,
    radioGroup5: null,
    strongly: [
      "radio1",
      "radio2",
      "radio3",
      "radio4",
      "radio5",
      "radio6",
      "radio7",
      "radio8",
      "radio9",
      "radio10",
      "radio11",
      "radio12",
      "radio13",
      "radio14",
      "radio15",
      "radio16",
      "radio17",
      "radio18",
      "radio19",
      "radio20",
      "radio21",
      "radio22",
      "radio23",
      "radio24",
      "radio25",
    ],
    radio1: 1,
    radio2: 2,
    raceText: "",
    sexText: "",
    text2: "",
    text3: "",
    text4: "",
    enabled: false,
    show: 1,
    place: 2,
    error: false,
  }),
  methods: {
    func() {
      if (this.place + 1 >= 11) {
        return this.place;
      }
      return this.place++;
    },
    other(input) {
      if (input === 3) {
        switch (input) {
          case this.radioGroup:
            this.radioGroup = this.text1;
        }
        return this.radioGroup;
      }
    },
    checker() {
      switch (this.show) {
        case 1:
          if (this.Race.length === 0) {
            this.place--;
            this.error = true;
            return 0;
          }
          break;
        case 2:
          if (this.radioGroup === null) {
            this.place--;
            this.error = true;
            return 0;
          }
          break;
        case 3:
          if (this.radioGroup2 === null) {
            this.place--;
            this.error = true;
            return 0;
          }
          break;
        case 4:
          if (this.radioGroup3 === null) {
            this.place--;
            this.error = true;
            return 0;
          }
          break;
        case 6:
          if (this.text3 === "") {
            this.place--;
            this.error = true;
            return 0;
          }
          break;
        case 7:
          if (this.text4 === "") {
            this.place--;
            this.error = true;
            return 0;
          }
          break;
      }
      this.error = false;
    },
  },

  /*components: {
    // eslint-disable-next-line vue/no-unused-components
    Home1,
  },*/
};
</script>

<style scoped>
#top-margin {
  margin-top: 40px;
}
#s-align {
  margin-top: 70px;
}
#align {
  margin-top: 54px;
}
#sp-align {
  margin-top: 90px;
}
#sp2-align {
  margin-top: 110px;
}
</style>
