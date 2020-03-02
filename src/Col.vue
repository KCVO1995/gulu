<template>
  <div class="col" :class="colClass()" :style="gutterStyle()">
    <div style="border: 1px solid green;height: 100px;">
      <slot/>
    </div>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Col extends Vue {
    @Prop(String || Number) span: string | number | undefined;
    @Prop(String || Number) offset: string | number | undefined;
    @Prop(Object) ipad: object | undefined;
    @Prop(Object) narrowPc: object | undefined;
    @Prop(Object) pc: object | undefined;
    @Prop(Object) widePc: object | undefined;
    gutter = 0;

    gutterStyle() {
      const {gutter} = this;
      return {paddingRight: gutter / 2 + 'px', paddingLeft: gutter / 2 + 'px'};
    }

    createClasses(obj, str = '') {
      if (!obj) {return [];}
      let array = [];
      if (obj.span) { array.push(`col-${str}${obj.span}`); }
      if (obj.offset) { array.push(`offset-${str}${obj.offset}`); }
      return array;
    }

    colClass() {
      const {span, offset, ipad, narrowPc, pc, widePc} = this;
      const {createClasses} = this;
      return [
        ...createClasses({span, offset}),
        ...createClasses(ipad, 'ipad-'),
        ...createClasses(narrowPc, 'narrow-pc-'),
        ...createClasses(pc, 'pc-'),
        ...createClasses(widePc, 'wide-pc-'),
      ];
    }
  }

</script>

<style lang='scss' scoped>
  .col {width: 100%;}
  /*phone*/
  $class-prefix: 'col';
  @for $n from 1 through 24 {
    .#{$class-prefix}-#{$n} {width: $n/24 * 100%}
  }
  $class-prefix: 'offset';
  @for $n from 1 through 24 {
    .#{$class-prefix}-#{$n} {margin-left: $n/24 * 100%}
  }
  /*ipad*/
  @media (min-width: 577px) {
    $class-prefix: 'col-ipad';
    @for $n from 1 through 24 {
      .#{$class-prefix}-#{$n} {width: $n/24 * 100%}
    }
    $class-prefix: 'offset-ipad';
    @for $n from 1 through 24 {
      .#{$class-prefix}-#{$n} {margin-left: $n/24 * 100%}
    }
  }
  /*narrow-pc*/
  @media (min-width: 769px) {
    $class-prefix: 'col-narrow-pc';
    @for $n from 1 through 24 {
      .#{$class-prefix}-#{$n} {width: $n/24 * 100%}
    }
    $class-prefix: 'offset-narrow-pc';
    @for $n from 1 through 24 {
      .#{$class-prefix}-#{$n} {margin-left: $n/24 * 100%}
    }
  }
  /*col-pc*/
  @media (min-width: 993px) {
    $class-prefix: 'col-pc';
    @for $n from 1 through 24 {
      .#{$class-prefix}-#{$n} {width: $n/24 * 100%}
    }
    $class-prefix: 'offset-pc';
    @for $n from 1 through 24 {
      .#{$class-prefix}-#{$n} {margin-left: $n/24 * 100%}
    }
  }
  /*wide-pc*/
  @media (min-width: 1201px) {
    $class-prefix: 'col-wide-pc';
    @for $n from 1 through 24 {
      .#{$class-prefix}-#{$n} {width: $n/24 * 100%}
    }
    $class-prefix: 'offset-wide-pc';
    @for $n from 1 through 24 {
      .#{$class-prefix}-#{$n} {margin-left: $n/24 * 100%}
    }
  }
</style>