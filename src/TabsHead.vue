<template>
  <div class="tabs-head">
    <slot>placeholder</slot>
    <div class="container-actions">
      <slot name="actions"/>
    </div>
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
  $tab-height: 40px;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    > .container-actions {
      margin-left: auto;
    }
  }
</style>