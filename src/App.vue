<template>
  <v-app>
    <v-app-bar app dense dark color="blue darken - 3">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Olfaction</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/survey1">
            <v-list-item-icon>
              <v-icon>mdi-shield</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Multisensory Survey</v-list-item-title>
          </v-list-item>

          <v-list-item to="/teyon">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
              <!--Only icon available-->
            </v-list-item-icon>
            <v-list-item-title>Multicultural Survey</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>


<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.8.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.8.0/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>

<script>
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

export default {
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
};
</script>





