<template>
  <component :is="tag" :type="type" class="button" :class="class_button"><slot/></component>
</template>

<script>
export default {
  name: 'UiButton',
  props:{
    tag:{
      type:[String, Object, Function],
      default: 'button',
    },
    variant:{
      type:[String, Object, Function],
      default: 'secondary',     
    }
  },
  computed:{
    class_button(){
      let classes = []
      classes.push(this.variant!='button'?'button_' + this.variant:this.variant)
      if(Object.keys(this.$attrs).includes('block')&&this.$attrs.block !== false&&(this.$attrs.block == ''||this.$attrs.block == true)) classes.push('button_block')
      return classes
    },
    type(){
      return this.tag=='button'?this.tag:null
    }
  }
};
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 10px 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: initial;
  text-align: center;
  border: 4px solid transparent;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
}

.button.button_block {
  display: block;
  width: 100%;
}

.button_primary {
  background-color: var(--blue);
  border-color: var(--blue);
  color: var(--white);
}

.button_primary:hover {
  background-color: var(--blue-light);
  border-color: var(--blue-light);
}

.button_secondary {
  background-color: var(--white);
  border-color: var(--blue);
  color: var(--blue);
}

.button_secondary:hover {
  border-color: var(--blue-light);
}

.button_danger {
  background-color: var(--white);
  border-color: var(--red);
  color: var(--red);
}

.button_danger:hover {
  border-color: var(--red-light);
}
</style>
