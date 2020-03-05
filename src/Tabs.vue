<template>
  <div class="tabs">
    <slot/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop, Provide} from 'vue-property-decorator';

  @Component
  export default class Tabs extends Vue {
    @Prop(String || Number) selected: string | number | undefined;
    @Provide('eventBus') eventsBus = new Vue();

    mounted() {
      this.eventsBus.$emit('update:selected', this.selected);
    }
  }

</script>

<style lang='scss' scoped>
  .tabs {
    display: flex;
    flex-direction: column;
  }
</style>