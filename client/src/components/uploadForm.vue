<template>
<div>
    <form @submit.prevent="submit" enctype="multipart/form-data" >
    <div class="form-group">
        <div class="custom-file">        
            <input v-on:change="getDataImage($event)" type="file" class="input-img" id="customFile">
            <label class="custom-file-label" for="customFile">Choose file</label>
        </div>
        <label for="exampleInputPassword1"></label>
        <input type="text" class="form-control" placeholder="Describe your pic...">
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
        console.log('masuk submit')
        let formData = new FormData()
        formData.append('caption', this.caption)
        formData.append('image', this.image)
        axios({
            method: "post",
            url: `http://localhost:3000/posts`,
            data: formData,
            headers:{
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNTU1ZmFiOTljZWYzMzExNzY0NDlmMyIsImVtYWlsIjoicmFtZGFuQG1haWwuY29tIiwidXNlcm5hbWUiOiJyYW1kYW4iLCJpYXQiOjE1NjU4NzYyMTJ9.3Ee19bgcZSFnIE4lQ5_SubtHTDNBOgKnBdcbuaQ1iiQ'
            }
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