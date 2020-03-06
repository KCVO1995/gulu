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
      if (this.$refs.popover && this.$refs.popover === e.target) {return;}
      if (this.$refs.toggleWrapper.contains(e.target)) {return;}
      if (this.$refs.contentWrapper.contains(e.target)) {return;}
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
  .popover {
    border: 1px solid red;
    position: relative;
    display: inline-block;
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