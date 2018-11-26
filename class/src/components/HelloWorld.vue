<template>
    <div>
      <p>{{ counter }}</p>
      <button @click="handleClick">Up</button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters, mapMutations } from 'vuex';
import { Mutation } from 'vuex-class';

@Component({
  computed: {
    ...mapGetters({ counter: 'current'}),
  },
  methods: {
    ...mapMutations(['increment']),
  },
})

export default class HelloWorld extends Vue {
  @Prop() private value!: number;
  @Mutation('increment') private increment!: () => void;

  handleClick() {
    this.increment();
  }
}
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
