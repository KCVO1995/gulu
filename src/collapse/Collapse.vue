<template>
  <div class="collapse">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "ClockCollapse",
    props: {
      single: {
        type: Boolean,
        default: false
      },
      selectedArray: {type: Array,},
    },
    data() {
      return {
        eventBus: new Vue
      }
    },
    provide() {
      return {eventBus: this.eventBus}
    },

    mounted() {
      this.eventBus.$emit("update:selectedArray", this.selectedArray)
      this.add()
      this.remove()
    },

    methods: {
      addSelected(title) {
        let selectedArrayCopy = JSON.parse(JSON.stringify(this.selectedArray))
        if (this.single) {selectedArrayCopy = [title]} else {selectedArrayCopy.push(title)}
        return selectedArrayCopy
      },

      add() {
        this.eventBus.$on("update:addSelectedArray", (title) => {
          const selectedArrayCopy = this.addSelected(title)
          this.emit(selectedArrayCopy)
        })
      },

      remove() {
        this.eventBus.$on("update:removeSelectedArray", (title) => {
          let selectedArrayCopy = JSON.parse(JSON.stringify(this.selectedArray))
          const index = selectedArrayCopy.indexOf(title)
          selectedArrayCopy.splice(index, 1)
          this.emit(selectedArrayCopy)
        })
      },

      emit(selectedArrayCopy) {
        this.$emit("update:selectedArray", selectedArrayCopy)
        this.eventBus.$emit("update:selectedArray", selectedArrayCopy)
      }
    },
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