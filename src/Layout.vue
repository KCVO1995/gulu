<template>
  <div class="layout" :class="{hasSide}">
    <slot/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Layout extends Vue {
    hasSide = false
    mounted(){
      this.$children.forEach( vm => {
        if (vm.$options.name === 'Sider') {
          this.hasSide = true
        }
      })
    }

  }

</script>

<style lang='scss' scoped>
  .layout {
    display: flex;
    flex-direction: column;
  }
  .hasSide {
    flex-direction: row;
  }

</style>