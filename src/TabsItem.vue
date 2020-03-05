<template>
  <div @click="onClick" class="tabs-item" :class="{active}">
    <slot/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Inject, Prop} from 'vue-property-decorator';

  @Component
  export default class TabsItem extends Vue {
    @Prop(String || Number) name: string | number | undefined;
    @Inject('eventBus') eventBus;
    active = false;

    mounted() {
      this.eventBus.$on('update:selected', (selected) => {
        this.active = this.name === selected;
      });
    }

    onClick() {
      this.eventBus.$emit('update:selected', this.name);
    }
  }

</script>

<style lang='scss' scoped>
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: blue;
    }
  }
</style>