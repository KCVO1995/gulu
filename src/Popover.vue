<template>
  <div @click="showPopover" class="popover" ref="popover">
    <div v-if="visible" class="contentWrapper" ref="contentWrapper">
      <slot name="content"/>
    </div>
    <span class="toggleWrapper" ref="toggleWrapper">
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

    showPopover(e) {
      if (this.$refs.toggleWrapper.contains(e.target)) {
        if (this.visible) {
          this.close();
        } else {
          this.open();
        }
      }
    }

    open() {
      console.log('弹出了');
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener('click', this.onClickDocument);
      });
    }

    close() {
      console.log('使用close关闭了');
      this.visible = false;
      document.removeEventListener('click', this.onClickDocument);
    }

    onClickDocument(e) {
      const {popover, contentWrapper} = this.$refs;
      if (popover && popover === e.target || popover.contains(e.target)) {return;}
      if (contentWrapper && contentWrapper === e.target || contentWrapper.contains(e.target)) {return;}
      console.log('点击document关闭了');
      this.close();
    }


    positionContent() {
      const contentWrapper = this.$refs.contentWrapper as Node;
      const toggleWrapper = this.$refs.toggleWrapper as Node;
      document.body.appendChild(contentWrapper);
      const {top, left, width, height} = toggleWrapper.getBoundingClientRect();
      contentWrapper['style'].top = top + scrollY + 'px';
      contentWrapper['style'].left = left + scrollX + 'px';
    }
  }

</script>

<style lang='scss'>
  $border-color: #333;
  $border-radius: 4px;
  .popover {
    position: relative;
    display: inline-block;
    > .toggleWrapper {
      display: inline-block;
    }
  }
  .contentWrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: white;
    transform: translateY(-100%);
    margin-top: -10px;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;
    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 10px;
    }
    &::before {
      border-top-color: black;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }

</style>