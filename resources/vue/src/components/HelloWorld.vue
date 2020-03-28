<template>
  <div class="hello">
    <h1>TEST page</h1>
    <h3>Global classes of ui</h3>
    <p class="secondary-font">This text should be in bebas font</p>
    <p class="system-font">This text should be system font</p>
    <h3>Local usage of ui vars</h3>
    <p class="component-secondary-font">This text should be in bebas font</p>
    <p class="component-system-font">This text should be system font</p>
    <h3>UI class with background image used from lib</h3>
    <div class="background-logo"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.component-system-font {
  font-family: $ui-font-family-base;
}
.component-secondary-font {
  font-family: $ui-font-family-secondary;
}
.background-logo {
  background: $ws-logo-bg;
}
</style>
