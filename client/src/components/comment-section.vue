<template>
  <div class="container">
    <!-- Trigger the modal with a button -->
    <button
      type="button"
      class="btn btn-info btn-lg"
      data-toggle="modal"
      data-target="#myModal"
    >Gallery Model</button>

    <!-- Modal -->
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
                      <h4> <a href="#" :click.prevent="onComment"> <i class="far fa-comment"> </i> </a> &nbsp <a href="#"> <i class="far fa-heart"></i> </a> </h4>
                    </div>

                    <small> caption </small>
                  </div>
                </div>

              
                <table class="table">
                  <thead>
                    <tr v-for="comment in comments">
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
export default {
  data() {
    return {
      message: "Hello world",
      commentSection: false,
      iscomment: '',
      comments: [
        {
          user: 'baim',
          comment: 'naise'
        },
        {
          user: 'vincent',
          comment: 'buka dikit dong'
        },
        {
          user: 'yahya',
          comment: 'dikit aja kok'
        }
      ]
    };
  },

  methods: {

    onComment(){
      this.commentSection = true
    }

  }
};
</script>

<style scoped>

img {
  height: 530px;
}

a {
  color: black;
}

</style>