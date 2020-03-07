<template>
  <div class="collapse">
    <slot/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop, Provide} from 'vue-property-decorator';

  @Component
  export default class collapse extends Vue {
    @Prop({default: 'false'}) single?: boolean;
    @Provide('eventBus') eventBus = new Vue();

  }

</script>

<style lang='scss' scoped>
  $grey: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }

</style>