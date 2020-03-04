<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Toast extends Vue {
    @Prop() autoClose: boolean | number | undefined;

    mounted() {
      let {autoClose} = this;
      if (autoClose) {
        typeof autoClose === 'boolean' ? autoClose = 5 : autoClose;
        setTimeout(() => {
          this.close();
        }, autoClose * 1000);
      }
    }

    close() {
      this.$el.remove();
      this.$destroy();
    }
  }

</script>

<style lang='scss' scoped>
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .container {
    font-size: $font-size; height: $toast-height; line-height: 1.8;
    position: fixed; top: 0; left: 50%; transform: translateX(-50%); display: flex;
    color: white;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    padding: 0 16px;
  }

</style>