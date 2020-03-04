<template>
  <div class="container" ref="container">
    <div class="message">
      <div v-if="enableHtml" v-html="$slots.default[0]"></div>
      <slot v-if="!enableHtml">placeholder</slot>
    </div>
    <button class="close" ref="closeHeight" @click="onClickClose" v-if="closeButton">{{closeButton.text}}</button>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Toast extends Vue {
    @Prop() autoClose: boolean | number | undefined;
    @Prop(Boolean) enableHtml: boolean | undefined;
    @Prop(Object) closeButton: Object | undefined;

    mounted() {
      this.execAutoClose();
      if (this.closeButton) {this.updatedStyle();}
    }

    execAutoClose() {
      let {autoClose} = this;
      if (autoClose) {
        typeof autoClose === 'boolean' ? autoClose = 5 : autoClose;
        setTimeout(() => {
          this.close();
        }, autoClose * 1000);
      }
    }

    updatedStyle() {
      this.$nextTick(() => {
        this.$refs.closeHeight['style'].height = `${this.$refs.container.getBoundingClientRect().height}px`;
      });
    }

    onClickClose() {
      const {callback} = this.closeButton;
      callback && callback(this);
      this.close();
    }

    close() {
      this.$el.remove();
      this.$destroy();
    }
  }

</script>

<style lang='scss' scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .container {
    font-size: $font-size; min-height: $toast-min-height; line-height: 1.8;
    position: fixed; top: 0; left: 50%; transform: translateX(-50%); display: flex;
    color: white;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
  }
  .message {padding: 0.8em 16px 0.8em 16px;}
  .close {
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    flex-shrink: 0;
    color: white;
    border: none;
    border-left: 1px solid #666;
    &:focus {
      outline: none;
    }
  }

</style>