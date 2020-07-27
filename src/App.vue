<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped temporary>
      <v-list dense>
        <router-link to="/">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-gamepad-square-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Play</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/settings">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-cog-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer />
      <v-toolbar-title>Tic-Tac-Toe</v-toolbar-title>
      <v-spacer />
      <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark" elevation="0" rounded>
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <router-view :currentPlayerNames="playerNames" @saveSettings="saveSettings($event)"></router-view>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app>
      <span class="caption" >Copyright &copy; {{ new Date().getFullYear() }} Amiel Filarca</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
    playerNames: ["Player 1", "Player 2"],
  }),
  methods: {
    saveSettings($event) {
      this.playerNames = [...$event];
    },
  },

  // created() {
  //   this.$vuetify.theme.dark = true;
  // },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>