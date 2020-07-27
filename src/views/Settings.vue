<template>
  <div>
    <v-list>
      <v-list-item>
        <v-list-item-title>Names</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-text-field id="playerOneName" label="Player 1" :value="currentPlayerNames[0]" outlined></v-text-field>
      </v-list-item>
      <v-list-item>
        <v-text-field id="playerTwoName" label="Player 2" :value="currentPlayerNames[1]" outlined></v-text-field>
      </v-list-item>
      <v-list-item>
        <v-btn @click="saveSettings" block color="primary" dark>Save</v-btn>
      </v-list-item>
    </v-list>
    <v-snackbar v-model="snackbar" timeout="4000" color="success">
      Changes saved
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      snackbar: false,
    };
  },
  props: {
    currentPlayerNames: Array,
  },
  methods: {
    saveSettings() {
      let playerNames = [];
      let playerOneName = document.getElementById("playerOneName").value;
      let playerTwoName = document.getElementById("playerTwoName").value;
      playerNames.push(playerOneName, playerTwoName);
      this.$emit("saveSettings", playerNames);
      this.snackbar = true;
    },
  },
};
</script>