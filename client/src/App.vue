<template>
  <div>

    <navbar 
    v-if="isLogin" 
    @loggedout="logout"
    @upload="upload"
    ></navbar>
    <uploadForm v-if="uploading" ></uploadForm>
    <signin @loggedin='login' v-if="!isLogin"></signin>
    <home v-if="isLogin"> </home>
    <profile v-if="isLogin" > </profile>
    <commentSection v-if="isLogin" > </commentSection>
  </div>
</template>

<script>
import navbar from './components/navbar'
import signin from './components/signin'
import uploadForm from './components/uploadForm'
import commentSection from './components/comment-section'
import home from './components/home'
import profile from './components/profile'

export default {
  data() {
    return {
      isLogin: false,
      uploading: false
    };
  },
  components:{
    navbar,
    signin,
    uploadForm,
    commentSection,
    home,
    profile
  },
  methods:{
    login(){
      console.log("masuk sini")
      this.isLogin = true
    },
    logout(){
      this.isLogin = false
    },
    upload(){
      this.uploading = !this.uploading
    }
  },
  created(){
    if(localStorage.getItem('token')){
      this.login()
    }
    
  }
};
</script>

<style scoped>
</style>    