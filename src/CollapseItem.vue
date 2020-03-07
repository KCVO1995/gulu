<template>
  <div class="collapse-item" @click="toggle">
    <div class="title" :class="{itemOpen: open}">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot/>
    </div>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class CollapseItem extends Vue {
    @Prop(String) title: string | undefined;
    open = false;

    toggle() {
      this.open = !this.open;
    }
  }

</script>

<style lang='scss' scoped>
  $grey: #ddd;
  .collapse-item {
    > .title {
      border-top: 1px solid $grey;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      &.itemOpen {
        border-bottom: 1px solid $grey;
      }
    }
    > .content {
      padding: 8px;
    }
    &:first-child {
      > .title {border-top: none;}
    }
  }

</style>