<template>
  <div class="tabs">
    <slot/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Tabs extends Vue {

  }

</script>

<style lang='scss' scoped>
  .tabs {
    display: flex;
    flex-direction: column;
  }
</style>