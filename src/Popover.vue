<template>
  <div class="popover" ref="popover">
    <div v-if="visible" class="contentWrapper" ref="contentWrapper" :class="{[`position-${position}`]: true}">
      <slot name="content"/>
    </div>
    <span class="triggerWrapper" ref="toggleWrapper">
      <slot/>
    </span>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Popover extends Vue {
    @Prop({default: 'top'}) position?: string;
    @Prop({default: 'click'}) trigger?: string;
    visible = false;

    mounted() {
      console.log(this.trigger);
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.showPopover);
      } else if (this.trigger === 'hover') {
        this.$refs.popover.addEventListener('mouseenter', this.open);
        this.$refs.popover.addEventListener('mouseleave', this.close);
      }
    }

    destroyed() {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.showPopover(e));
      } else if (this.trigger === 'hover') {
        this.$refs.popover.removeEventListener('mouseenter', this.open);
        this.$refs.popover.removeEventListener('mouseleave', this.close);
      }
    }

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
      const {height: contentHeight} = contentWrapper.getBoundingClientRect();
      const position = {
        top: {top: top + scrollY, left: left + scrollX},
        bottom: {top: top + height + scrollY, left: left + scrollX},
        left: {top: top + scrollY - (contentHeight - height) / 2, left: left + scrollX},
        right: {top: top + scrollY - (contentHeight - height) / 2, left: left + width + scrollX},
      };
      contentWrapper['style'].top = position[this.position].top + 'px';
      contentWrapper['style'].left = position[this.position].left + 'px';
    }
  }

</script>

<style lang='scss'>
  $border-color: #333;
  $border-radius: 4px;
  $max-width: 20em;
  $popover-bg: white;
  .popover {
    position: relative;
    display: inline-block;
    > .triggerWrapper {
      display: inline-block;
    }
  }
  .contentWrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: $popover-bg;
    padding: .5em 1em;
    max-width: $max-width;
    word-break: break-all;
    &::before, &::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      border: 10px solid transparent;
    }
    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before, &::after {
        left: 10px;
        border-bottom: none;
      }
      &::before {
        border-top-color: $border-color;
        top: 100%;
      }
      &::after {
        border-top-color: $popover-bg;
        top: calc(100% - 1px);
      }
    }
    &.position-bottom {
      margin-top: 10px;
      &::before, &::after {
        left: 10px;
        border-top: none;
      }
      &::before {
        border-bottom-color: $border-color;
        bottom: 100%;
      }
      &::after {
        border-bottom-color: $popover-bg;
        bottom: calc(100% - 1px);
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after {
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-right: none;
      }
      &::before {
        border-left-color: $border-color;
      }
      &::after {
        border-left-color: $popover-bg;
        left: calc(100% - 1px)
      }
    }
    &.position-right {
      margin-left: 10px;
      &::before, &::after {
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-left: none;
      }
      &::before {
        border-right-color: $border-color;
      }
      &::after {
        border-right-color: $popover-bg;
        right: calc(100% - 1px)
      }
    }
  }

</style>