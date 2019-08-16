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
                <img class="modal-pic" :src="photoModal.image" class="card-img" alt="picture">
              </div>
              <div class="col-6" style="padding: 0px"> 
                <div class="modal-body">
                  <div class="d-flex justify-content-start">
                    <h6>{{photoModal.userId.username}}<h6>
                    <br>
                    <small>{{photoModal.caption}}</small>
                  </div>
                    <h4> <a href="#" @click.prevent > <i class="far fa-comment"> </i> </a> 
                    <a v-if="photoModal.likes.some(f=>{return f._id == userId})"  href="#"> <i style="color:red" @click.prevent="like" class="fas fa-heart">{{photoModal.likes.length}}</i> </a> 
                    <a v-else href="#"> <i  @click.prevent="like" class="far fa-heart">{{photoModal.likes.length}}</i> </a> 
                    <a href="#"> <i class="far fa-share-square"></i> 
                    </a> <a><i v-if="photoModal.userId._id == userId" @click.prevent="deletePost" class="fa fa-trash" ></i></a></h4>
                
                  <div v-for="comment in comments" :key="comment._id">
                    <small> {{comment.user}} {{comment.comment}} </small>
                  </div>

                  <div class="mt-4">
                  <input v-model="iscomment" placeholder="Comment..." type="text" style="height:25px; width: 330px;" class="form-control" />
                  <div class="d-flex justify-content-center" style="margin-top: 10px">
                    <button class="btn btn-sm btn-primary pull-right">comment</button>
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
      userId:'',
      photoModal : {
        image: '',
        userId:{
          _id: '',
          username:''
        },
        likes:[]
      },
      photos: [],
      comments: [],
      iscomment: '',
      filterUser: false
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
      axios({
        method: 'get',
        url:`http://localhost:3000/posts/one/${photo._id}`,
        headers:{
          token: localStorage.token
        }
      })
      .then(({ data })=>{
        this.photoModal = data
      })
      
    },
    like(){
      axios({
        method: 'patch',
        url:`http://localhost:3000/posts/${this.photoModal._id}`,
        headers: {
          token: localStorage.token
        }
      })
      .then(({ data })=>{
        console.log('liked')
        this.getModal(this.photoModal)
      })
    },
    deletePost(){
      axios({
        method: 'delete',
        url:`http://localhost:3000/posts/${this.photoModal._id}`,
        headers: {
          token: localStorage.token
        }
      })
      .then(({ data })=>{
        console.log('deleted')
        this.photoModal= {
        image: 'https://cdn4.iconfinder.com/data/icons/common-toolbar/36/Delete-2-512.png',
        userId:{
          username:'deleted'
        },
        likes:[]
      }
      this.getAllPhotos() 
      })
    }
  },
  created(){
    this.getAllPhotos()
    this.userId = localStorage.userId
  },
  computed:{
    filteredPhotos(){
      if(filterUser == true){
        return this.photos.filter(photo=>{
          return article.author._id  == userId
        })
      }
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