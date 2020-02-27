<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
      <svg class="icon" aria-hidden="true" v-if="icon">
        <use :xlink:href="`#${icon}`"/>
      </svg>
      <div class="content">
        <slot/>
      </div>
    </button>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {
    @Prop(String) icon: string | undefined;
    @Prop(String) iconPosition: string | undefined;
  }

</script>

<style lang='scss' scoped>
  .g-button {
    height: var(--button-height);
    font-size: var(--font-size);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }
    &.icon-undefined,
    &.left {
      > .content {
        order: 2
      }
      > .icon {
        order: 1;
        margin-right: .3em;
      }
    }
    &.icon-right {
      > .icon {order: 2;
        margin-left: .3em;}
      > .content {order: 1}
    }
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }




</style>