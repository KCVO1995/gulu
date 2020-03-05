<template>
  <div class="head">
    <slot/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class TabsHead extends Vue {

  }

</script>

<style lang='scss' scoped>
  .head {
    display: flex;
  }
</style>