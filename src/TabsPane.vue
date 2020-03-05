<template>
  <div :class="{active}" v-if="active">
    <slot/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Inject, Prop} from 'vue-property-decorator';

  @Component
  export default class TabsPane extends Vue {
    @Prop(String || Number) name: string | number | undefined;
    @Inject('eventBus') eventBus;
    active = false;

    mounted() {
      this.eventBus.$on('update:selected', (selected) => {
        this.active = this.name === selected;
      });
    }
  }

</script>

<style lang='scss' scoped>
  .active {
    background: green;
  }
</style>