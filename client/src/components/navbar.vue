<template>
  <div>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <img src="../../image/logo_transparent.png" alt />
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light mt-auto" style="background-color: white;">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#" @click="goToHomePage">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Liked</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello world"
    };
  },
  method: {
    goToHomePage() {
      alert("Haloo");
    }
  }
};
</script>

<style scoped>
.collapse {
  display: flex;
  justify-content: center;
  height: 40px;
  font-size: 18px;
  margin-bottom: 20px;
}
img {
  height: 200px;
  width: 200px;
}
nav {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>    