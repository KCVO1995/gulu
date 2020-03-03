<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Layout extends Vue {

  }

</script>

<style lang='scss' scoped>
  .layout {
    display: flex;
    flex-direction: column;
  }

</style>