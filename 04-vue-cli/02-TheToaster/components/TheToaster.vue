<template>
  <div  class="toasts">
    <div v-for="item in toasts" :key="item.id" class="toast" :class="item.cssClass">
      <UiIcon class="toast__icon" :icon="item.icon" />
      <span>{{ item.message }}</span>
    </div>
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'TheToaster',

  components: { UiIcon },

  data(){
    return {
      id:0,
      toasts: [],
    }
  },

  methods: {
    addToastetr(toast){
      toast.id = this.id++
      this.toasts.push(toast)
      setTimeout(()=>this.toasts.shift(),5000)
    },
    success(message){
      this.addToastetr({
        icon: 'check-circle',
        cssClass: 'toast_success',
        message
      })
    },
    error(message){
      this.addToastetr({
        icon: 'alert-circle',
        cssClass: 'toast_error',
        message
      })
    }
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
