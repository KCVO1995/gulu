<template>
  <div class="collapse-item">
    <div class="title" :class="{itemOpen: open}" @click="toggle">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot/>
    </div>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Inject, Prop} from 'vue-property-decorator';

  @Component
  export default class CollapseItem extends Vue {
    @Inject() eventBus;
    @Prop(String) title: string | undefined;
    open = false;

    mounted() {
      this.eventBus.$on('update:selectedArray', selectedArray => {
        this.open = selectedArray.indexOf(this.title) >= 0;
      });

    }

    toggle() {
      if (this.open) {
        this.eventBus && this.eventBus.$emit('update:removeSelectedArray', this.title);
      } else {
        this.eventBus && this.eventBus.$emit('update:addSelectedArray', this.title);
      }
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