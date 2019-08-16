<template>
  <div>
    <div class="container">
      <div class="row no-gutters" style="margin-top: 10px">
        <div class="col-3 list-photo d-flex justify-content-center list-unstyled" v-for="photo in photos" >
          <a href="#" 
            data-toggle="modal"
            data-target="#myModal">
            <img v-bind:src="photo.img" />
          </a>
        </div>
      </div>
    </div>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="row">
            <div class="col-12">
              <img src="https://images.unsplash.com/photo-1498736297812-3a08021f206f?ixlib=rb-1.2.1&auto=format&fit=crop&w=757&q=80" class="card-img" alt="dummy">
            <div class="col-12">
            <div class="modal-body">
              <div class="row">
                <div class="col-12">
                  <div class="d-flex justify-content-center">
                    <h4> <a href="#" @click.prevent="onComment"> <i class="far fa-comment"> </i> </a> &nbsp <a href="#"> <i class="far fa-heart"></i> </a> </h4>
                  </div>

                  <small> caption </small>
                </div>
              </div>

                
              <table  class="table">
                <thead>
                  <tr v-for="comment in comments" :key="comment._id">
                    <th> {{comment.user}} </th>
                    <th> {{comment.comment}} </th>
                  </tr>
                </thead>
              </table>

              <input v-model="iscomment" placeholder="Comment..." type="text" style="height:50px" class="form-control" />
              <div class="d-flex justify-content-end" style="margin-top: 10px">
                <button class="btn btn-sm btn-primary pull-right">comment</button>
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
      ],
      comments:[],
      modalphoto:{}
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



</style>