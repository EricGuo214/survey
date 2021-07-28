<template>
  <body>
    <div class="center">
      <h1>Eric's Demo</h1>
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
            v-model.number="phonenumber"
            type="number"
            label="Phone Number"
            :rules="[(v) => !!v || 'This field is required']"
          >
          </v-text-field>
        </v-col>

        <v-text-field
          v-model="title"
          dense
          item-text="name"
          :rules="[required]"
          label="Type your favorite smell"
          required
          return-object
        >
        </v-text-field>
        <br />
        <v-text-field
          v-model="notes"
          label="Do you have any concerns / questions? (optional)"
          outlined
        ></v-text-field>

        <br />
        <div class="mcq">
          <v-col>
            <p>You have a nose</p>
            <input
              type="radio"
              name="tfq"
              id="true"
              value="true"
              v-model="picked"
            />
            <label for="true"> True </label>
            <br />
            <input
              type="radio"
              name="tfq"
              id="false"
              value="false"
              v-model="picked"
            />
            <label for="false"> False </label>
            <br />
          </v-col>
        </div>

        <h2>Contact Information</h2>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-avatar size="50px" tile>
                <img
                  :src="`https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png`"
                  :alt="'facebook logo'"
                />
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-text-field
                v-model="facebook"
                :rules="[(v) => !!v || 'This field is required']"
                label="Facebook Username"
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
        </v-list>
        <v-btn color="primary" @click="post"> Submit</v-btn>
      </v-form>
    </div>
  </body>
</template>

<script>
</script>

<style scoped>
.center {
  text-align: center;
  margin: auto;
  width: 50%;
}

.mcq{
  margin-right: 300px;
}
</style>

