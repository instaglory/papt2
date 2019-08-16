<template>
  <div>
    <div class="container">
      <div class="row no-gutters" style="margin-top: 10px">
        <div class="col-3 list-photo d-flex justify-content-center list-unstyled" v-for="photo in photos" >
          <a href="#" 
            @click='getModal(photo)'
            data-toggle="modal"
            data-target="#myModal">
            <img v-bind:src="photo.image" />
          </a>
        </div>
      </div>

      <!-- modal -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="row">
              <div class="col-6" style="padding: 0px">
                <img class="modal-pic" :src="photoModal.image" class="card-img" alt="dummy">
              </div>
              <div class="col-6" style="padding: 0px"> 
                <div class="modal-body">
                  <div class="d-flex justify-content-start">
                    <h6>{{photoModal.userId.username}}<h6>
                    <br>
                    <small>{{photoModal.caption}}</small>
                  </div>
                    <h4> <a href="#" @click.prevent="onComment"> <i class="far fa-comment"> </i> </a> &nbsp <a href="#"> <i class="far fa-heart"></i> </a> &nbsp <a href="#"> <i class="far fa-share-square"></i> </a> </h4>
                
                  <div v-for="comment in comments">
                    <small> {{comment.user}} {{comment.comment}} </small>
                  </div>

                  <div class="mt-4">
                  <input v-model="iscomment" placeholder="Comment..." type="text" style="height:25px; width: 330px;" class="form-control" />
                  <div class="d-flex justify-content-center" style="margin-top: 10px">
                    <button class="btn btn-sm btn-primary pull-right" @click='createComment(photoModal._id)'>comment</button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      photoModal : {
        userId:{
          username:''
        }
      },
      photos: [],
      comments: [],
      iscomment: ''
    };
  },
  methods:{
    getAllPhotos(){
      axios({
        url:"http://localhost:3000/posts",
        method: 'get',
        headers: {
          token: localStorage.token
        }
      }).then(({ data })=>{
        this.photos = data
        console.log(data)
      })
    },
    getModal(photo){
      console.log('masuk modal')
      axios({
       method: 'get',
       url:`http://localhost:3000/posts/one/${photo._id}`,
       headers:{
         token: localStorage.token
       }
     })
     .then(({ data })=>{
       console.log(data)
       this.photoModal = data
       this.fetchComment()
     })
    },
    createComment(){
      console.log('masuk create comment')
      axios({
        url:`http://localhost:3000/comment/${this.photoModal._id}`,
        method: 'post',
        headers: {
          token: localStorage.token
        },
        data: {comment: this.iscomment}
      }).then(({ data })=>{
        this.com = data
        this.fetchComment()
        console.log(data)
      })
    },
    fetchComment(){
      axios({
        url:`http://localhost:3000/comment/${this.photoModal._id}`,
        method: 'get',
        headers: {
          token: localStorage.token
        }
      }).then(({ data })=>{
        this.comments = data
        console.log(data)
      })
    }
  },
  created(){
    this.getAllPhotos()
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

a:hover {
  opacity: 0.7;
  transition: outline 0.21ms ease-in-out;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.modal-pic  {
  height: 450px;
  width: 420px
}

a {
  color: black;
}

small {
  font-size: 10px;
  font-weight: normal;
}

i {
  font-size: 15px; 
}

</style>