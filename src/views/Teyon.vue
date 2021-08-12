<template>
  <div>
    <span>{{ minutes }}</span>
    <span>:</span>
    <span>{{ seconds }}</span>
    <div>
      <v-card elevation="6" class="mx-auto" max-width="600" v-if="show === 0">
        <p class="text-h6 font-weight-bold pa-4">Please enter your name</p>
        <v-form>
          <v-text-field
            v-model="clientName"
            dense
            :rules="[(v) => !!v || 'This field is required']"
            label="Full name"
            outlined
            required
          ></v-text-field>
        </v-form>
      </v-card>
    </div>
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
                value="Other"
                hide-details
              ></v-checkbox>
              <v-text-field label="" v-model="raceText"> </v-text-field>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <div id="top-margin" v-if="show === 1">
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
                value="Other2"
                hide-details
              ></v-radio>
              <v-text-field v-model="Stext" label="Other..."> </v-text-field>
            </v-row>
          </v-col>
        </v-radio-group>
      </v-card>
    </div>
    <div id="top-margin" v-if="show === 1">
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
    <div id="top-margin" v-if="show === 1">
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
    <div id="top-margin" v-if="show === 1">
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
    <div id="top-margin" v-if="show === 1">
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
    <div id="top-margin" v-if="show === 1">
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
    <v-card id="top-margin" v-if="table === 0" elevation="0">
      <v-row>
        <v-col cols="3">
          <div id="sp2-align">
            <v-card
              elevation="6"
              v-for="(item, i) in items"
              :key="i"
              class="mx-auto"
              max-width="300"
              height="100%"
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
              v-for="(strong, p) in 25"
              absolute
              :key="p"
            >
              <v-row>
                <v-radio-group :v-model="`radio${p}`" row>
                  <v-col
                    class="ml-4"
                    cols="1.5"
                    v-for="(rating, i) in ratings"
                    :key="i"
                  >
                    <v-radio
                      :key="p"
                      :label="`${rating}`"
                      :value="`${rating}`"
                      @change="valueGet(rating, p)"
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
    <div>
      <v-card
        class="d-flex align-start"
        id="top-margin"
        v-if="table === 1"
        elevation="0"
      >
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
                    <v-col class="ml-4" cols="1.5" v-for="j in 7" :key="j">
                      <v-radio
                        class="mr-8"
                        :v-model="`rad${p}`"
                        :key="p"
                        :label="`${j}`"
                        :value="`${j}`"
                        @change="valueGet2(j, p)"
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
    <div v-if="show === 4">
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
      <v-alert type="error" v-if="sError === true">
        Please answer all multiple choice
      </v-alert>
    </div>

    <v-row class="mb-8" id="top-margin" justify="space-around">
      <v-btn
        v-if="show <= 2"
        right
        class="text-right"
        @click="
          rand();
          checker();
          show = func();
          order();
          resetTimer();
          startTimer();
        "
        >Next
      </v-btn>
      <v-btn
        v-if="show === 3"
        right
        class="text-right"
        @click="
          checker();
          show = func();
          order();
          resetTimer();
          startTimer();
          submit();
        "
        >Submit
      </v-btn>
    </v-row>
    <div></div>
  </div>
</template>

<script>
//import RadioButton from "@/components/RadioButton.vue";
// Add submit button back
import firebase from "firebase";
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
    items2: [],
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
    vault: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    storage: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    radioGroup: null,
    radioGroup2: null,
    radioGroup3: null,
    radioGroup4: null,
    radioGroup5: null,
    timer: null,
    totalTime: 1 * 60,
    clientName: "",
    run: true,
    run2: true,
    done: false,
    raceText: "",
    Stext: "",
    text2: "",
    text3: "",
    text4: "",
    enabled: false,
    show: 0,
    table: 2,
    place: 1,
    start: 0,
    error: false,
    sError: false,
  }),
  mounted() {
    //this.startTimer();
    //Anything in this gets started as soon as the page loads
  },
  computed: {
    minutes: function () {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function () {
      const seconds = this.totalTime - this.minutes * 60;
      return this.padTime(seconds);
    },
  },
  methods: {
    valueGet(val, number) {
      this.vault[number] = val;
    },
    startTimer() {
      this.timer = setInterval(() => this.countdown(), 1000);
    },
    resetTimer() {
      let x = 60;
      if (this.show === 0) {
        x = 60;
      } else if (this.show === 1) {
        x = 60 * 3;
      } else if (this.show === 2 || this.show === 3) {
        x = 60 * 5;
      }
      this.totalTime = x;
      clearInterval(this.timer);
      this.timer = null;
    },
    padTime: function (time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown() {
      if (this.totalTime >= 1) {
        this.totalTime--;
      } else {
        this.totalTime = 0;
        this.resetTimer();
        // Make whatever needs to happen once inactivity limit hits here
      }
    },
    order() {
      if (this.show === 2 && this.run2 === true) {
        this.table = parseInt(Math.random() * 2);
        this.run2 = false;
      }
      if (this.show === 3 && this.table === 0 && this.done === false) {
        this.table = 1;
        this.done = true;
      } else if (this.show === 3 && this.table === 1 && this.done === false) {
        this.table = 0;
        this.done = true;
      }
      if (this.show === 4) {
        this.table = 2;
      }
    },
    rand() {
      // Feature completed
      if (this.show === 1 && this.run === true) {
        let x;
        for (let i = 25; i >= 1; i--) {
          x = parseInt(Math.random() * i);
          this.items2.push(this.items.splice(x, 1)[0]);
        }
        this.items = this.items2;
        this.run = false;
      }
    },
    valueGet2(val, number) {
      this.storage[number - 1] = val;
    },
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
        case 0:
          if (this.clientName === "") {
            if (this.start === 0) {
              this.start++;
            }
            this.place--;
            return 0;
          }
          break;
        case 1:
          if (this.Race.length === 0) {
            this.place--;
            this.error = true;
            return 0;
          }
          for (let i = 0; i < this.Race.length; i++) {
            if (this.Race[i] === "Other" && this.raceText === "") {
              this.place--;
              this.error = true;
              return 0;
            }
          }
          if (this.radioGroup === null) {
            this.place--;
            this.error = true;
            return 0;
          }
          if (this.radioGroup === "Other2" && this.Stext === "") {
            this.place--;
            this.error = true;
            return 0;
          }
          if (this.radioGroup2 === null) {
            this.place--;
            this.error = true;
            return 0;
          }
          if (this.radioGroup3 === null) {
            this.place--;
            this.error = true;
            return 0;
          }
          if (this.text3 === "") {
            this.place--;
            this.error = true;
            return 0;
          }
          if (this.text4 === "") {
            this.place--;
            this.error = true;
            return 0;
          }
          break;
        case 2:
          for (let i = 0; i < this.vault.length; i++) {
            if (this.table === 0) {
              if (this.vault[i] === "") {
                this.place--;
                this.sError = true;
                return 0;
              }
            } else if (this.table === 1) {
              if (this.storage[i] === "") {
                this.place--;
                this.sError = true;
                return 0;
              }
            }
          }
          break;
        case 3:
          for (let i = 0; i < this.storage.length; i++) {
            if (this.table === 0) {
              if (this.vault[i] === "") {
                this.place--;
                this.sError = true;
                return 0;
              }
            } else if (this.table === 1) {
              if (this.storage[i] === "") {
                this.place--;
                this.sError = true;
                return 0;
              }
            }
          }
          this.fill();
          break;
      }
      this.error = false;
      this.sError = false;
    },
    fill() {
      for (let i = 0; i < this.vault.length; i++) {
        let string = `${this.items[i]}: ${this.vault[i]}`;
        this.vault[i] = string;
      }
      for (let i = 0; i < this.storage.length; i++) {
        let string = `${this.items2[i]}: ${this.storage[i]}`;
        this.storage[i] = string;
      }
    },
    submit() {
      if (this.show != 4) {
        return 0;
      }
      var db = firebase.firestore();
      var respondeeName = this.clientName;
      db.collection("Multicultural Responses").doc(respondeeName).set({
        name: this.clientName,
        raceEthnicity: this.Race,
        Age: this.radioGroup,
        Sex: this.radioGroup2,
        MedicalAilments: this.radioGroup3,
        MedicalAilmentsInfo: this.text2,
        cultureGroup: this.text3,
        region: this.text4,
        strongly: this.vault,
        intensely: this.storage,
      });
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
