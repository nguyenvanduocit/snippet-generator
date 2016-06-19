<template>
  <div class="col-md-3">
    <div class="field">
      <fieldset class="form-group">
        <label v-if="model.label" for="{{ _uid }}" v-text="model.label"></label>
        <small v-if="model.required">*</small>
        <component class="form-control" id="{{ _uid }}" :is="inputType" :model="model" :required="model.required" :placeholder="model.placeholder"></component>
        <small v-if="model.description" v-text="model.description" class="text-muted field__description"></small>
      </fieldset>
    </div>
  </div>
</template>
<script>
  import NormalField from './field/normal.vue'
  import SelectField from './field/select.vue'
  export default{
    props: {
      model: {
        default: {
          label: false,
          value: '',
          placeholder: false,
          description: false,
          max: false,
          min: false,
          step: false,
          required: false,
          multiple: false,
          pattern: false,
          autocomplete: false
        }
      }
    },
    components: {
      NormalField,
      SelectField
    },
    computed: {
      inputType () {
        switch (this.model.type) {
          case 'text':
          case 'date':
          case 'datetime':
          case 'month':
          case 'email':
          case 'phone':
          case 'url':
          case 'week':
          case 'number':
          case 'range':
          case 'checkbox':
          case 'radio':
            return 'normal-field'
          default:
            return this.model.type + '-field'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .field{
    .field__description{
      line-height: 5px;
    }
  }
</style>
