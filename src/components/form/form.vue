<template>
  <form>
    <div class="row">
      <field v-for="field in fields" :model="field"></field>
    </div>
  </form>
</template>
<script>
  import Field from './field.vue'
  export default {
    props: ['fields'],
    components: {
      Field
    }
  }
</script>
