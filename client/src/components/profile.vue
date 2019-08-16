<template>
  <div class="container">
    <div class="row">
    <div class="col-md-4">
      <img class="img-fluid" src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt="">
    </div>

    <div class="col-7">
      <h3 class="my-3">Vincent</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
    </div>

  </div>
  <!-- /.row -->

  <!-- Related Projects Row -->
  <hr>
  <h3 class="my-4" style="text-align: center">Photos</h3>

   <div class="row no-gutters" style="margin-top: 10px">
      <div class="col-3 list-photo d-flex justify-content-center list-unstyled" v-for="photo in photos">
        <a href="#">
          <img v-bind:src="photo.img" />
          <button hidden type="button" class="btn btn-outline-info text">info</button>
        </a>
      </div>
    </div>
  <!-- /.row -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello world',
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