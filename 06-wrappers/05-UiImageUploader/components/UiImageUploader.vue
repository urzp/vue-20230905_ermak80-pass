<template>
  <div class="image-uploader">
    <label class="image-uploader__preview" :class ="{'image-uploader__preview-loading':uploading}" :style="`--bg-url: url(${preview})`">
      <span class="image-uploader__text">{{ message }}</span>
      <input ref='input' type="file" accept="image/*" v-bind="$attrs" @change="previewFiles($event.target.files[0])" class="image-uploader__input" />
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'UiImageUploader',
  data(){
    return{
      startUpload:false,
      selectedWithoutUploder :false,
    }
  },
  props:{
    preview:String,
    uploader: [String, Function, Error],
    onSelect: [String, Function, Error],
    onRemove: [String, Function, Error],
  },
  computed:{
    message(){
      let message = ''
      if (!this.preview) message = 'Загрузить изображение'
      if (this.preview) message = 'Удалить изображение'
      if (this.selectedWithoutUploder) message = 'Удалить изображение'
      if (this.startUpload) message = 'Загрузка...'
      return message
    },
    uploading(){
      if(this.startUpload) return true
      if(this.uploader) return true
      return false
    },
  },
  emits:['select', 'remove', 'error', 'upload'],
  methods:{
    async previewFiles(file) {
      this.$emit('select',file)
      if(this.uploader) {
        this.startUpload = true;
        let result
        try{
          result = await this.uploader(file)
        }catch(err){
            this.$emit('error',err)
        }
        if(result) {
          this.$emit('upload',result)
        } else {
          this.$refs.input.value = ''
        }
        this.startUpload = false;
      }else{
        this.selectedWithoutUploder =true
      }
      if(this.$refs.input.value){
        
        this.$emit('remove')
        this.$refs.input.value = ''
      } 
   },
  },
};
</script>

<style scoped>
.image-uploader {
}

.image-uploader__input {
  opacity: 0;
  height: 0;
}

.image-uploader__preview {
  --bg-url: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--bg-url);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  transition: 0.2s border-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 512px;
  height: 228px;
}

.image-uploader__text {
  color: var(--white);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>
