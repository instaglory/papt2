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
          <img v-bind:src="photo.img"/>
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
      photos: [
        {
          img: 'http://cameta.club/image_upload/tu/tumblr-bedroom-decor-fresh-teen-room-best-about-teenage_single-bedroom-701x451.jpg'
        },
        {
          img: 'https://66.media.tumblr.com/ad33ef91750ea95d94a0e1dc611dc506/tumblr_p0cg3wUySw1woeuwro1_400.jpg'
        },
        {
          img: 'https://i.pinimg.com/736x/68/22/a8/6822a8ec1cfbf78c54e5de9c0c938d38.jpg'
        },
        {
          img: 'https://cfcdn.zulily.com/images/cache/product/452x1000/356055/zu71353474_main_tm1555077821.jpg'
        },
        {
          img: 'http://www.ourartworld.com/photography/wp-content/uploads/2018/07/f8496c6e1d0af9c482483507a309d4b1--magic-umbrella-clear-umbrella.jpg'
        },
        {
          img: 'https://images.unsplash.com/photo-1526116977494-90748acc0cad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
        },
        {
          img: 'https://images.unsplash.com/photo-1533003505519-6a9b92ed4911?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'
        },
        {
          img: 'https://images.unsplash.com/photo-1531279550271-23c2a77a765c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'
        }
      ]
    };
  },
  methods: {
    submitEdit(){
      let formData = new FormData()
      formData.append('bio', this.bio)
      formData.append('profilePic', this.profileImg)
      console.log(formData);
      axios({
          method: 'patch',
          url: `http://localhost:3000/users/update`,
          data: formData,
          headers:{
              token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNTYzMzgzMGU2NzljNjA2NWI3ZTZiYiIsImVtYWlsIjoiYXNkQG1haWwuY29tIiwidXNlcm5hbWUiOiJhbnhpZXR5IiwiaWF0IjoxNTY1OTM2NTU0fQ.2z9paLKfxVRMCj_f13LxiURqOb_LmAqSxsK-A61f_Jg'
          }
      })
      .then(response => {
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
    }
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