<template>
  <select v-model="model.value" :multiple="model.multiple" >
    <option v-for="(name, text) in model.options" :value="name" v-text="text"></option>
  </select>
</template>
<script>
  export default{
    props: {
      model: {
        default: {
          multiple: true
        }
      }
    }
  }
</script>
