<template>
  <div @click="onClick">
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

    mounted() {
      this.eventBus.$on('update:selected', (name) => {
        console.log(name);
      });
    }

    onClick() {
      this.eventBus.$emit('update:selected', this.name);
    }
  }

</script>

<style lang='scss' scoped>

</style>