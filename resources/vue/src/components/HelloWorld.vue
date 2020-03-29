<template>
  <div class="hello">
    <h1>TEST page</h1>
    <h3>Global classes of ui</h3>
    <p class="secondary-font">This text should be in bebas font</p>
    <p class="system-font">This text should be system font</p>
    <h3>Local usage of ui vars</h3>
    <p class="component-secondary-font">This text should be in bebas font</p>
    <p class="component-system-font">This text should be system font</p>
    <h3>Component with background image used from lib</h3>
    <div class="background-logo">here</div>
    <h3>Component with background image used from common files shared between Laravel and Vue</h3>
    <div class="error-from-common">here</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

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
.error-from-common {
  min-width: 70px;
  min-height: 200px;
  border: 1px solid red;
  margin: 16px;
  padding: 16px;
}
.background-logo {
  background: $ui-logo-bg;
}
</style>
