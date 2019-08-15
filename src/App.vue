<template>
  <div id="app">
    <img src="./assets/chuk.gif" class="dance" alt="dancing Chuck">
    <Btn title="Получить шутку" @handleClick="handleFetchJoke"/>
    <JokeBox :title="joke.value" :poster="joke.icon_url"/>
    <template v-if="isTimerOff">
      <Btn title="Новая шутка каждые 10 секунд" @handleClick="getJokeEvery10Sec"/>
    </template>
    <template v-else>
      <Btn title="Остановить генерацию шуток" @handleClick="stopTimer"/>
    </template>
  </div>
</template>

<script>
import Btn from "./components/Button";
import JokeBox from "./components/JokeBox";
import { mapGetters } from 'vuex';

export default {
  name: "App",
  components: {
    Btn,
    JokeBox
  },
  data () {
    return {
      timerId: null
    }
  },
  methods: {
    async handleFetchJoke () {
      await this.$store.dispatch('getJoke');
    },
    async getJokeEvery10Sec () {
      await this.handleFetchJoke();
      this.timerId = await setInterval(async function () {
        await this.handleFetchJoke();
      }.bind(this), 10000);
    },
    stopTimer () {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  },
  computed: {
    ...mapGetters(['joke']),
    isTimerOff () {
      return !this.timerId;
    }
  }
};
</script>

<style>
  #app {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .dance {
    width: 65px;
  }
</style>
