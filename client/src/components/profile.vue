<template>
  <div>
    <div class="container">
      <div class="row">
      <div class="col-md-4">
        <img class="img-fluid" src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt="">
      </div>

      <div class="col-7">
        <h3 class="my-3">Vincent</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
        <a href="#" data-toggle="modal" data-target="#editProfile" style="color: black"> <i class="fas fa-cog"> Edit Profile </i> </a>
      </div>

    </div>
  <!-- /.row -->

  <!-- Related Projects Row -->
    <hr>
    <h3 class="my-4" style="text-align: center">Photos</h3>

   <div class="row no-gutters" style="margin-top: 10px">
      <div class="col-3 list-photo d-flex justify-content-center list-unstyled" v-for="photo in photos">
        <!-- <a href="#"> -->
          <img v-bind:src="photo.image"/>
        <!-- </a> -->
      </div>
    </div>
  <!-- /.row -->

  <!-- Modal -->
    <div class="modal fade" id="editProfile" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Profile</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitEdit" enctype="multipart/form-data" >
                <div class="form-group">
                  <div class="custom-file" style="margin-bottom: 5px;">        
                    <input v-on:change="getProfileImage($event)" type="file" class="input-img" id="customFile">
                    <label class="custom-file-label" for="customFile">Choose file</label>
                  </div>
                  <input type="text" v-model="bio" class="form-control" placeholder="Bio...">
                </div>
              <button type="submit" class="btn btn-primary">edit</button>
            </form>
    
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      message: 'Hello world',
      profileImg: null,
      bio: '',
      photos: []
    };
  },
  methods: {
    submitEdit(){
      let formData = new FormData()
      formData.append('bio', this.bio)
      formData.append('profilePic', this.profileImg)
      axios({
          method: 'patch',
          url: `http://localhost:3000/users/update`,
          data: formData,
          headers:{
              token: localStorage.getItem('token')
          }
      })
      .then(response => {
        console.log('object');
        this.getProfile()
        Swal.fire(
        'Success',
        'profile updated!',
        'success'
        )
      })
      .catch(err => {
        Swal.fire(
        'Opppsss',
        'Something worng...',
        'error'
        )
      })
    },

    getProfileImage(){
      this.profileImg = event.target.files[0]
    },

    getProfile(){
      console.log('masuk');
      axios({
        method: 'get',
        url: 'http://localhost:3000/users'
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch(console.log(object))
    },

    getMyPhotos(){
      axios({
        method: 'get',
        url: 'http://localhost:3000/posts/mypost',
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({ data }) => {
        console.log(data, 'data');
        this.photos = data
      })
      .catch(console.log(err))
    }
  },
  created() {
    
    this.getMyPhotos()
  }
};
</script>

<style scoped>

img {
  width: 250px;
  height: 250px;
}

.list-photo {
  padding: 0px;
  width: 250px;
  height: 250px;
  margin-bottom: 20px;
}

.img-fluid {
  width: 300px;
  height: 300px;
}

</style>