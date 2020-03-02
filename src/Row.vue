<template>
  <div class="row" :style="gutterStyle()" :class="{['align-'+align]: align}">
    <slot/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Row extends Vue {
    @Prop(String || Number) gutter: string | number | undefined;
    @Prop({default: 'left'}) align?: string;

    gutterStyle() {
      const {gutter} = this;
      return {marginRight: -gutter / 2 + 'px', marginLeft: -gutter / 2 + 'px'};
    }

    mounted() {
      this.$children.forEach(vm => {vm['gutter'] = this.gutter;});
    }
  }
</script>

<style lang='scss' scoped>
  .row {
    display: flex;
    &.align-left {justify-content: flex-start;}
    &.align-center {justify-content: center;}
    &.align-right {justify-content: flex-end;}
  }
</style>