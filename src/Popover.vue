<template>
  <div @click.stop="showPopover" class="popover">
    <div v-if="visible" class="content" @click.stop>
      <slot name="content"/>
    </div>
    <slot/>
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
        const callback = () => {
          this.visible = false;
          document.removeEventListener('click', callback);
        };
        document.addEventListener('click', callback);
      }
    }
  }

</script>

<style lang='scss' scoped>
  .popover {
    position: relative;
    > .content {
      position: absolute;
      bottom: 100%;
      border-radius: 3px;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);
      padding: 10px;
      margin-bottom: 5px;
    }
  }

</style>