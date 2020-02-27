<template>
  <div class="global">
    <slot/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class ButtonGroup extends Vue {
    mounted() {
      for (let node of this.$el.children) {
        const name = node.nodeName.toLocaleLowerCase();
        if (name !== 'button') {
          console.warn(`g-button-group 的子元素只允许是 g-button，而你使用了${name}`)
        }
      }
    }

  }

</script>

<style lang='scss' scoped>
  .global {
    display: inline-flex;
    vertical-align: middle;
    > .g-button {
      border-radius: 0;
      margin-left: -1px;
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover {
        z-index: 1;
      }
    }
  }

</style>