<template>
  <div class="row">
    <slot/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Row extends Vue{

  }

</script>

<style lang='scss' scoped>
  .row {
    display: flex;
  }
</style>