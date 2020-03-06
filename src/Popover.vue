<template>
  <div @click.stop="showPopover" class="popover">
    <div v-if="visible" class="contentWrapper" @click.stop>
      <slot name="content"/>
    </div>
    <span class="toggleWrapper">
      <slot/>
    </span>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Popover extends Vue {
    visible = false;

    showPopover() {
      this.visible = !this.visible;
      if (this.visible) {
        this.$nextTick(() => {
          const contentWrapper = this.$el.querySelector('.contentWrapper') as Node;
          const toggleWrapper = this.$el.querySelector('.toggleWrapper') as Node;
          document.body.appendChild(contentWrapper);
          const {top, left, width, height} = toggleWrapper.getBoundingClientRect();
          contentWrapper['style'].top = top + 'px';
          contentWrapper['style'].left = left + 'px';
        });
        const callback = () => {
          this.visible = false;
          document.removeEventListener('click', callback);
        };
        document.addEventListener('click', callback);
      }
    }
  }

</script>

<style lang='scss'>
  .popover {
    position: relative;
    > .toggleWrapper {
      display: inline-block;
    }
  }
  .contentWrapper {
    position: absolute;
    border-radius: 3px;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
    padding: 1em;
  }

</style>