<template>
    <div class="generator generator__term-meta">
      <div class="row">
        <div class="col-lg-12">
          <vue-form :fields="fields"></vue-form>
        </div>
      </div>
      <code-block v-for="template in templates" rows="10" :fields="fields" :template="template"></code-block>
    </div>
</template>
<script>
  import VueForm from './../form/form.vue'
  import CodeBlock from './code-block.vue'

  export default{
    data () {
      return {
        templates: {},
        fields: {}
      }
    },
    components: {
      VueForm,
      CodeBlock
    },
    route: {
      data ({to: {params: {id}}}) {
        return this.$http.get('https://api.github.com/gists/' + id).then(function (response) {
          var options = JSON.parse(response.data.files['options.json'].content)
          var fields = JSON.parse(response.data.files['fields.json'].content)
          var templates = []
          options.templates.forEach(function (template) {
            template.content = response.data.files[template.file].content
            templates.push(template)
          })
          return {
            templates: templates,
            fields: fields.fields
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>
