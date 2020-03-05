<template>
  <div>
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

    mounted() {
      this.eventBus.$on('update:selected', (name) => {
        console.log(name);
      });
    }
  }

</script>

<style lang='scss' scoped>

</style>