<template>
  <input v-model="model.value" :type="model.type" :max="model.max" :min="model.min" :step="model.step" :pattern="model.pattern" :autocomplete="model.autocomplete">
</template>
<script>
  export default{
    props: ['model']
  }
</script>
