<template>
  <body>
    <div class="center">
      <h1>Multisensory Survey</h1>
      <h3>Demographics</h3>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          dense
          :rules="[(v) => !!v || 'This field is required']"
          label="Full name"
          outlined
          required
        ></v-text-field>

        <v-col>
          <v-text-field
            v-model="culturalGroup"
            type="text"
            label="What cultural group do you most associate with? (Ex: Middle Eastern, South Asian, East Asian, American, etc.)"
            :rules="[(v) => !!v || 'This field is required']"
          >
          </v-text-field>
        </v-col>

        <v-col>
          <v-autocomplete
            v-model="gender"
            dense
            :rules="[(v) => !!v || 'This field is required']"
            :items="genders"
            label="Gender"
            outlined
          ></v-autocomplete>
        </v-col>

        <v-text-field
          v-model="favoriteSmell"
          dense
          item-text="name"
          :rules="[required]"
          label="Type your favorite smell"
          required
          return-object
        >
        </v-text-field>
        <br />

        <v-col>
          <v-autocomplete
            v-model="neighborhood"
            dense
            :rules="[(v) => !!v || 'This field is required']"
            :items="neighborhoods"
            label="What type of neighborhood do you live in?"
            outlined
          ></v-autocomplete>
        </v-col>

        <v-col>
          <v-autocomplete
            v-model="age"
            dense
            :rules="[(v) => !!v || 'This field is required']"
            :items="ages"
            label="What age group do you belong to?"
            outlined
          ></v-autocomplete>
        </v-col>

        <br />
        <p>
          Have you suffered from or do you currently have any diseases or
          medical ailments (especially those that impact your nervous system /
          sense of smell)? (ex: Alzheimer's, Parkinson's disease, diabetes,
          cancer, COVID-19, depression, etc.) If 'yes' and you are comfortable
          to do so, please record specifically what your ailment was. If 'no,'
          please write n/a.
        </p>
        <v-text-field
          v-model="disease"
          label="Disease / Medical history"
          outlined
        ></v-text-field>

        <h2>Color / Taste Association</h2>
        <v-list>
          <v-list-item>
            <img
              style="height: 200px; width: auto"
              :src="`https://previews.123rf.com/images/pixelrobot/pixelrobot1911/pixelrobot191100037/137658965-one-single-blue-gummy-bear-isolated-on-white-background-.jpg`"
              :alt="'Blue Gummy'"
            />

            <v-list-item-content>
              <v-text-field
                v-model="blue"
                :rules="[(v) => !!v || 'This field is required']"
                label="What smell do you associate with the color blue?"
                required
              ></v-text-field>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <img
              style="height: 200px; width: auto"
              :src="`https://previews.123rf.com/images/pixelrobot/pixelrobot1911/pixelrobot191100037/137658965-one-single-blue-gummy-bear-isolated-on-white-background-.jpg`"
              :alt="'Blue Gummy'"
            />

            <v-list-item-content>
              <v-text-field
                v-model="blue"
                :rules="[(v) => !!v || 'This field is required']"
                label="What smell do you associate with the color blue?"
                required
              ></v-text-field>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-avatar>
              <v-avatar size="50px" tile>
                <img
                  :src="`https://i.pinimg.com/736x/c8/95/2d/c8952d6e421a83d298a219edee783167.jpg`"
                  :alt="'instagram logo'"
                />
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-text-field
                v-model="instagram"
                label="Instagram (optional)"
              ></v-text-field>
            </v-list-item-content>
          </v-list-item>
          <v-card flat color="transparent">
            <v-subheader
              >How well are you able to remember smells from a scale of 1-5? (1:
              not at all, 2: faintly, 3: neutral, 4: strongly, 5: very
              strongly)</v-subheader
            >
            <v-card-text>
              <v-row>
                <v-col class="pr-4">
                  <v-slider
                    v-model="slider"
                    class="align-center"
                    :max="max"
                    :min="min"
                    hide-details
                  >
                    <template v-slot:append>
                      <v-text-field
                        v-model="slider"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 60px"
                      ></v-text-field>
                    </template>
                  </v-slider>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-list>
        <v-btn color="primary" @click="submit"> Submit</v-btn>
      </v-form>
    </div>
  </body>
</template>

<script>
import firebase from "firebase";
export default {
  data: () => ({
    min: 0,
    max: 5,
    slider: 0,
    selectedDemographics: [],
    genders: ["Male", "Female", "Other"],

    demographics: [
      "White (Including Middle Eastern)",
      "Hispanic or Latino",
      "Black or African American",
      "Native American or American Indian",
      "Asian / Pacific Islander",
      "Other",
    ],
    neighborhoods: ["Urban", "Suburban", "Rural"],
    ages: [
      "Under 10 years old",
      "10-15 years old",
      "16-20 years old",
      "21-40 years old",
      "21-40 years old",
      "41-60 years old",
      "Over 61 years old",
    ],
  }),
  methods: {
    submit() {
      var db = firebase.firestore();
      var respondeeName = this.name;
      db.collection("Responses").doc(respondeeName).set({
        name: this.name,
        culturalGroup: this.culturalGroup,
        favoriteSmell: this.favoriteSmell,
        gender: this.gender,
        smellStrength: this.slider,
      });
    },
  },
};
</script>

<style scoped>
.center {
  text-align: center;
  margin: auto;
  width: 50%;
}

.mcq {
  margin-right: 300px;
}
</style>

