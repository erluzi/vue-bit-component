<template>
  <button class="er-button" @click="onClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'ErButton',
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>
