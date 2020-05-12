<template>
  <div>
    <button @click="myRock" class="hand">Rock</button>
    <button @click="myScissors" class="hand">Scissors</button>
    <button @click="myPaper" class="hand">Paper</button>
    <div>
      <button @click="randomIndex">push</button>
      <p>{{ computerHand }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Hands: ['グー', 'チョキ', 'パー'],
      rock: 0,
      scissors: 1,
      paper: 2,
      comNumber: 0,
      resultNumber: 0
    }
  },
  computed: {
    computerHand() {
      return this.Hands[this.comNumber];
    }
  },
  methods: {
    randomIndex() {
      return this.comNumber = Math.floor(Math.random() * 3);
    },
    myRock() {
      console.log('scissors');
    },
    myScissors() {
      console.log('scissors');
    },
    myPaper() {
      console.log('paper');
    }
  }
  // c = (a - b + 3) % 3
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.hand {
  margin-left: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #43746b;
  border-style: none;
  outline: none;
}
</style>