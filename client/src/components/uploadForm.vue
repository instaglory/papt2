<template>
<div>
    <form @submit.prevent="submit" enctype="multipart/form-data" >
    <div class="form-group">
        <div class="custom-file">        
            <input v-on:change="getDataImage($event)" type="file" class="input-img" id="customFile">
            <label class="custom-file-label" for="customFile">Choose file</label>
        </div>
        <label for="exampleInputPassword1"></label>
        <input v-model="caption" type="text" class="form-control" placeholder="Describe your pic...">
    </div>

    <button type="submit" class="btn btn-primary">Post</button>

    </form>
</div>



</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        caption: "",
        image: null
    };
  },
  methods:{
      submit(){
        let formData = new FormData()
        formData.append('caption', this.caption)
        formData.append('image', this.image)
        this.caption=""
        this.image=""
        axios({
            method: "post",
            url: `http://localhost:3000/posts`,
            data: formData,
            headers:{
                token: localStorage.getItem('token')
            }
        })
        .then(({ data })=>{
            console.log('sukses')
        })
      },
      getDataImage(){
          this.image = event.target.files[0]
      }
  }
};
</script>

<style scoped>
</style>    