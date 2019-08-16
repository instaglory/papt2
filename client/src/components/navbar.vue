<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
      <img src="../resources/pictures/icon.png" class="img-icon" />
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
  margin-top: 90px;
}
.img-icon {
  position: absolute;
  height: 100px;
  top: 10px;
  left: 51%;
  margin-left: -65px;
}
</style>    