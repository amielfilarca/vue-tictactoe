<template>
  <div>
    <div class="board-row">
      <Square
        :indexOfWinningSquares="indexOfWinningSquares"
        :value="gameArray[0]"
        :index="0"
        @click="$emit('click', $event)"
      />
      <Square
        :indexOfWinningSquares="indexOfWinningSquares"
        :value="gameArray[1]"
        :index="1"
        @click="$emit('click', $event)"
      />
      <Square
        :indexOfWinningSquares="indexOfWinningSquares"
        :value="gameArray[2]"
        :index="2"
        @click="$emit('click', $event)"
      />
    </div>
    <div class="board-row">
      <Square
        :indexOfWinningSquares="indexOfWinningSquares"
        :value="gameArray[3]"
        :index="3"
        @click="$emit('click', $event)"
      />
      <Square
        :indexOfWinningSquares="indexOfWinningSquares"
        :value="gameArray[4]"
        :index="4"
        @click="$emit('click', $event)"
      />
      <Square
        :indexOfWinningSquares="indexOfWinningSquares"
        :value="gameArray[5]"
        :index="5"
        @click="$emit('click', $event)"
      />
    </div>
    <div class="board-row">
      <Square
        :indexOfWinningSquares="indexOfWinningSquares"
        :value="gameArray[6]"
        :index="6"
        @click="$emit('click', $event)"
      />
      <Square
        :indexOfWinningSquares="indexOfWinningSquares"
        :value="gameArray[7]"
        :index="7"
        @click="$emit('click', $event)"
      />
      <Square
        :indexOfWinningSquares="indexOfWinningSquares"
        :value="gameArray[8]"
        :index="8"
        @click="$emit('click', $event)"
      />
    </div>
  </div>
</template>

<script>
import Square from "./Square";

export default {
  name: "Board",
  components: { Square },
  props: {
    gameArray: Array,
    indexOfWinningSquares: Array,
  },
};
</script>

<style scoped>
.board-row {
  display: flex;
}
</style>