<template>
  <div class="col">
    <slot/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Col extends Vue {

  }

</script>

<style lang='scss' scoped>
  .col {
    background: #eeeeee;
    border: 1px solid green;
    height: 100px;
    width: 100%;

  }

</style>