<template>
  <UiInput ref="input" v-bind="$attrs" :type="type" :step="step" :modelValue="modelProxy" />
</template>

<script>
import UiInput from './UiInput.vue';

export default {
  inheritAttrs: false,
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
        if(this.type == 'date'){ date = new Date(date).toISOString().split('T')[0];} //date = "2020-02-01"
        if(this.type == 'time'){ date = new Date(date).toISOString().split('T')[1].slice(0, 5) } //date = "10:00" 
        if(this.type == 'datetime-local'){  // date = "2020-02-01 10:00"
           date = new Date(date).toISOString().split('T')[0] + "T" +  new Date(date).toLocaleTimeString('en-US', { hour: 'numeric', hour12: false, minute: 'numeric' })
         }
        //console.log('type =', this.type, 'in=' ,date)
        return date
      },
      set(value){
        if (!value) return null
         //console.log('type =', this.type,'out =', value )
        if(this.type == 'date') value = new Date(value).getTime()
        if(this.type == 'time') value = Date.UTC(1970, 0, 1, value.split(':')[0], value.split(':')[1], 0)
        if(this.type == 'datetime-local') {
          let date = value.split("T")[0]
          let time = value.split("T")[1]
          value = new Date(date.split("-")[0], date.split("-")[1], date.split("-")[2], time.split(':')[0], time.split(':')[1], 0)
        }
        //console.log('out_mode = ', value)
        this.$emit('update:modelValue',value);
      }
    }
  },
};
</script>
