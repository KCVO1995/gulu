<template>
  <div>
    <button class="g-button">按钮</button>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {
  }

</script>

<style lang='scss' scoped>
  .g-button {
    height: var(--button-height);
    font-size: var(--font-size);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }  background: var(--button-bg);
  }

</style>