<template>
  <div class="image-uploader">
    <label class="image-uploader__preview" :class ="{'image-uploader__preview-loading':statment.uploading}" :style="`--bg-url: url(${preview})`">
      <span class="image-uploader__text">{{ statment.message }}</span>
      <input type="file" accept="image/*" class="image-uploader__input" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'UiImageUploader',
  data(){
    return{
      statment:{
        preview: false,
        uploading:false,
        uploadet:false,
        error:false,
        message:'',
      }
    }
  },
  methods:{
    setPreview(){
      this.statment.preview = true;
      this.statment.uploading = false;
      this.statment.uploadet = false;
      this.statment.error = false;
      this.statment.message = 'Загрузить изображение';
    },
    setUploading(){
      this.statment.preview = false;
      this.statment.uploading = true;
      this.statment.uploadet = false;
      this.statment.error = false;
      this.statment.message = 'Загрузка...';
    },
    setUploadet(){
      this.statment.preview = false;
      this.statment.uploading = false;
      this.statment.uploadet = true;
      this.statment.error = false;
      this.statment.message = '';
    },
    setError(message){
      this.statment.preview = false;
      this.statment.uploading = false;
      this.statment.uploadet = false;
      this.statment.error = true;
      this.statment.message = message;
    },
  },
  props:{
    preview:String,
    uploader:Function,
  },
  computed:{
    updateStatment(){
      if(!this.preview) this.setPreview()
      if(this.preview) this.uploadet()
      return this.statment
    }
  }
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
