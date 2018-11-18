<template>
    <div>
      <p>{{ counter }}</p>
      <button @click="handleClick">Up</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapMutations } from 'vuex';

interface HelloWorldComponent extends Vue {
  counter: number;
  increment: () => void;
}

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters({ counter: 'current' }),
  },
  methods: {
    ...mapMutations(['increment']),
    handleClick() {
      this.increment();
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
