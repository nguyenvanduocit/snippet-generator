<template>
  <div class="code-block">
    <h3 v-text="template.title"></h3>
    <textarea contenteditable rows="10" class="form-control" readonly v-model="content"></textarea>
  </div>
</template>
<script>
  export default{
    props: {
      template: {},
      fields: {}
    },
    replace: false,
    computed: {
      content () {
        var compiled = this.template.content
        for (var key in this.fields) {
          var re = new RegExp('{{' + key + '}}', 'g')
          compiled = compiled.replace(re, this.fields[key].value)
        }
        return compiled
      }
    }
  }
</script>
<style lang="scss" scoped>
  .code-block{
    margin-bottom:30px;
    h3{
      font-size: 20px;
    }
  }
</style>
