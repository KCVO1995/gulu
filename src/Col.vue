<template>
  <div class="col" :class="{['col-' + span]: span,['offset-' + offset]: offset}">
    <slot/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Col extends Vue {
    @Prop(String || Number) span: string | number | undefined;
    @Prop(String || Number) offset: string | number | undefined;
  }

</script>

<style lang='scss' scoped>
  .col {
    background: #eeeeee;
    border: 1px solid green;
    height: 100px;
    width: 100%;
  }
  $class-prefix: 'col';
  @for $n from 1 through 24 {
    .#{$class-prefix}-#{$n} {width: $n/24 * 100%}
  }
  $class-prefix: 'offset';
  @for $n from 1 through 24 {
    .#{$class-prefix}-#{$n} {margin-left: $n/24 * 100%}
  }


</style>