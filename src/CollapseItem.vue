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
  import {Component, Inject, Prop} from 'vue-property-decorator';

  @Component
  export default class CollapseItem extends Vue {
    @Inject() eventBus;
    @Prop(String) title: string | undefined;
    open = false;

    mounted() {
      this.eventBus.$on('update:selected', (title) => {
        if (this.title !== title) {
          this.open = false;
        }
      });
    }

    toggle() {
      if (this.open) {
        this.open = false;
      } else {
        this.open = true;
        console.log('打开了');
        this.eventBus.$emit('update:selected', this.title);
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