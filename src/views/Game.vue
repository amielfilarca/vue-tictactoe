<template>
  <div>
    <v-list>
      <v-list-item>
        <Board
          :indexOfWinningSquares="indexOfWinningSquares"
          :gameArray="gameArray"
          @click="handleClick($event)"
        />
      </v-list-item>
      <v-list-item>
        <v-spacer />
        <v-btn @click="restartGame" color="primary" v-if="this.gameEnd == true">Play again</v-btn>
        <v-spacer />
      </v-list-item>
    </v-list>

    <div class="text-center">
      <v-bottom-sheet v-model="sheet" persistent>
        <v-sheet class="text-center" height="200px">
          <v-btn class="mt-6" text color="primary" @click="sheet = !sheet">close</v-btn>
          <h1 class="pt-6">{{result}}</h1>
        </v-sheet>
      </v-bottom-sheet>
    </div>
  </div>
</template>

<script>
import Board from "../components/Board";

export default {
  name: "Game",
  components: { Board },
  data() {
    return {
      result: null,
      sheet: false,
      gameArray: Array(9).fill(null),
      xIsNext: true,
      gameEnd: null,
      indexOfWinningSquares: [],
      isEqual(a, b, c) {
        if (a != null && b != null && c != null) {
          if (a == b && a == c) {
            return true;
          }
        }
      },
      hasWinner() {
        let arr = [...this.gameArray];
        if (this.isEqual(arr[0], arr[1], arr[2])) {
          this.indexOfWinningSquares = ["0", "1", "2"];
          return true;
        } else if (this.isEqual(arr[3], arr[4], arr[5])) {
          this.indexOfWinningSquares = ["3", "4", "5"];
          return true;
        } else if (this.isEqual(arr[6], arr[7], arr[8])) {
          this.indexOfWinningSquares = ["6", "7", "8"];
          return true;
        } else if (this.isEqual(arr[0], arr[3], arr[6])) {
          this.indexOfWinningSquares = ["0", "3", "6"];
          return true;
        } else if (this.isEqual(arr[1], arr[4], arr[7])) {
          this.indexOfWinningSquares = ["1", "4", "7"];
          return true;
        } else if (this.isEqual(arr[2], arr[5], arr[8])) {
          this.indexOfWinningSquares = ["2", "5", "8"];
          return true;
        } else if (this.isEqual(arr[0], arr[4], arr[8])) {
          this.indexOfWinningSquares = ["0", "4", "8"];
          return true;
        } else if (this.isEqual(arr[2], arr[4], arr[6])) {
          this.indexOfWinningSquares = ["2", "4", "6"];
          return true;
        }
      },
      isDraw() {
        let arr = [...this.gameArray];
        arr = arr.filter((i) => i == null);
        if (arr.length == 0) {
          return true;
        }
      },
    };
  },
  props: {
    currentPlayerNames: Array,
  },
  methods: {
    handleClick(i) {
      if (!this.hasWinner() && !this.isDraw()) {
        let gameArray = [...this.gameArray];
        if (!gameArray[i]) {
          if (this.xIsNext == true) {
            gameArray[i] = "x";
          } else {
            gameArray[i] = "o";
          }
          this.xIsNext = !this.xIsNext;
          this.gameArray = [...gameArray];
          if (this.hasWinner()) {
            this.xIsNext
              ? (this.result = `Winner: ${this.currentPlayerNames[1]}`)
              : (this.result = `Winner: ${this.currentPlayerNames[0]}`);
            this.gameEnd = true;
            this.sheet = true;
          } else if (this.isDraw()) {
            this.result = "Draw";
            this.gameEnd = true;
            this.sheet = true;
          }
        }
      }
    },
    restartGame() {
      let gameArray = Array(9).fill(null);
      this.gameArray = [...gameArray];
      let indexOfWinningSquares = [];
      this.indexOfWinningSquares = [...indexOfWinningSquares];
      this.xIsNext = true;
      this.result = null;
      this.gameEnd = !this.gameEnd;
    },
  },
};
</script>