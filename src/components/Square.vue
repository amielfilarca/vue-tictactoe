<template>
  <div>
    <div v-if="value == 'x'">
      <v-btn
        v-if="indexOfWinningSquares[0] == index || indexOfWinningSquares[1] == index || indexOfWinningSquares[2] == index "
        tile
        color="primary"
        width="calc(100vh/4)"
        height="calc(100vh/4)"
        max-width="calc(100vw/4)"
        max-height="calc(100vw/3.5)"
        min-width="calc(300px/3.5)"
        min-height="calc(400px/5)"
      >
        <v-img max-width="calc(100vw/4.5)" max-height="calc(100vw/4)" src="../assets/x.svg"></v-img>
      </v-btn>

      <v-btn
        v-else
        disabled
        @click="$emit('click', index)"
        tile
        width="calc(100vh/4)"
        height="calc(100vh/4)"
        max-width="calc(100vw/4)"
        max-height="calc(100vw/3.5)"
        min-width="calc(300px/3.5)"
        min-height="calc(400px/5)"
      >
        <v-img max-width="calc(100vw/4.5)" max-height="calc(100vw/4)" src="../assets/x.svg"></v-img>
      </v-btn>
    </div>

    <div v-else-if="value == 'o'">
      <v-btn
        v-if="indexOfWinningSquares[0] == index || indexOfWinningSquares[1] == index || indexOfWinningSquares[2] == index"
        tile
        color="primary"
        width="calc(100vh/4)"
        height="calc(100vh/4)"
        max-width="calc(100vw/4)"
        max-height="calc(100vw/3.5)"
        min-width="calc(300px/3.5)"
        min-height="calc(400px/5)"
      >
        <v-img max-width="calc(100vw/4.5)" max-height="calc(100vw/4)" src="../assets/o.svg"></v-img>
      </v-btn>

      <v-btn
        v-else
        disabled
        @click="$emit('click', index)"
        tile
        width="calc(100vh/4)"
        height="calc(100vh/4)"
        max-width="calc(100vw/4)"
        max-height="calc(100vw/3.5)"
        min-width="calc(300px/3.5)"
        min-height="calc(400px/5)"
      >
        <v-img max-width="calc(100vw/4.5)" max-height="calc(100vw/4)" src="../assets/o.svg"></v-img>
      </v-btn>
    </div>

    <v-btn
      v-else
      @click="$emit('click', index)"
      tile
      width="calc(100vh/4)"
      height="calc(100vh/4)"
      max-width="calc(100vw/4)"
      max-height="calc(100vw/3.5)"
      min-width="calc(300px/3.5)"
      min-height="calc(400px/5)"
    >{{value}}</v-btn>
  </div>
</template>

<script>
export default {
  name: "Square",
  props: {
    index: Number,
    value: String,
    indexOfWinningSquares: Array,
  },
};
</script>