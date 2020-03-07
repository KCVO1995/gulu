<template>
  <div class="collapse">
    <slot/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop, Provide} from 'vue-property-decorator';

  @Component
  export default class collapse extends Vue {
    @Prop({default: false, type: Boolean}) single?: boolean;
    @Prop(Array) selectedArray: string[] | undefined;
    @Provide('eventBus') eventBus = new Vue();

    mounted() {
      this.eventBus.$emit('update:selectedArray', this.selectedArray);
      this.add();
      this.remove();
    }

    addSelected(title) {
      let selectedArrayCopy = JSON.parse(JSON.stringify(this.selectedArray));
      if (this.single) {selectedArrayCopy = [title];} else {selectedArrayCopy.push(title);}
      return selectedArrayCopy;
    }

    add() {
      this.eventBus.$on('update:addSelectedArray', (title) => {
        const selectedArrayCopy = this.addSelected(title);
        this.emit(selectedArrayCopy);
      });
    }

    remove() {
      this.eventBus.$on('update:removeSelectedArray', (title) => {
        let selectedArrayCopy = JSON.parse(JSON.stringify(this.selectedArray));
        const index = selectedArrayCopy.indexOf(title);
        selectedArrayCopy.splice(index, 1);
        this.emit(selectedArrayCopy);
      });
    }

    emit(selectedArrayCopy) {
      this.$emit('update:selectedArray', selectedArrayCopy);
      this.eventBus.$emit('update:selectedArray', selectedArrayCopy);
    }

  }

</script>

<style lang='scss' scoped>
  $grey: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }

</style>