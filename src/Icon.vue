<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"/>
  </svg>
</template>

<script lang='ts'>
  // import Vue from 'vue';
  import './svg.js';
  // import {Component, Prop} from 'vue-property-decorator';
  //
  // @Component
  // export default class Icon extends Vue {
  //   @Prop(String) name: string | undefined;
  // }
  export default {
    props: {name: {type: String}}
  };

</script>

<style lang='scss' scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>