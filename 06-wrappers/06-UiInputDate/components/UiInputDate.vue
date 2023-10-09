<template>
  <UiInput v-model="modelProxy"/>
</template>

<script>
import UiInput from './UiInput.vue';

export default {
  name: 'UiInputDate',
  components: { UiInput },
  props:{
    modelValue: Number,
    type:{
      type: String,
      default:'date'
    },
    step: String,
  },
  emits: ['update:modelValue'],
  computed:{
    modelProxy:{
      get(){
        let date = this.modelValue
        if(this.type == 'date') return new Date(date).toLocaleDateString('en-GB')
        if(this.type == 'time') return new Date(date).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
        return this.modelValue;
      },
      set(value){
        this.$emit('update:modelValue', value);
      }
    }
  },
};
</script>
