<template>
  <div>
    <div class="computer">
      <p>相手の手：{{ computerHand }}</p>
    </div>
    <div class="myHand">
      <button 
        v-for="(item, index) in items" 
        :key="item.myHands" 
        @click="handClick(item.myHands, index)"
      >
        {{ item.myHands }}
      </button>
    </div>
    <div class="result">
      <p>勝敗：{{ resultHand }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comHands: ['Rock', 'Scissors', 'Paper'],
      items: [
        { myHands: 'Rock' },
        { myHands: 'Scissors' },
        { myHands: 'Paper' }
      ],
      comNumber: null,
      result: ""
    }
  },
  computed: {
    computerHand() {
      return this.comHands[this.comNumber];
    },
    resultHand() {
      return this.result;
    }
  },
  methods: {
    randomIndex() {
      return this.comNumber = Math.floor(Math.random() * 3);
    },
    handClick(key, index) {
        switch((index - this.randomIndex() + 3) % 3) {
          case 0:
            this.result = "Draw"
            break;
          case 1:
            this.result = "Lose"
            break;
          case 2:
            this.result = "Win"
            break;
        }
    }
  }
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

.myHand button {
  margin-left: 10px;
  cursor: pointer;
  font-size: 24px;
  color: #43746b;
  background-color: whitesmoke;
  border-style: none;
  outline: none;
}

.computer,
.result{
  color: #2c3e50;
}
</style>
